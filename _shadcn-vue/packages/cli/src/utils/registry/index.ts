import process from 'node:process'
import path from 'pathe'
import { HttpsProxyAgent } from 'https-proxy-agent'
import { ofetch } from 'ofetch'
import type * as z from 'zod'
import consola from 'consola'
import {
  registryBaseColorSchema,
  registryIndexSchema,
  registryWithContentSchema,
  stylesSchema,
} from '@/src/utils/registry/schema'
import type { registryItemWithContentSchema } from '@/src/utils/registry/schema'
import type { Config } from '@/src/utils/get-config'

const baseUrl = process.env.COMPONENTS_REGISTRY_URL ?? 'https://www.shadcn-vue.com'
const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined

export async function getRegistryIndex() {
  try {
    const [result] = await fetchRegistry(['index.json'])

    return registryIndexSchema.parse(result)
  }
  catch (error) {
    throw new Error('Failed to fetch components from registry.')
  }
}

export async function getRegistryStyles() {
  try {
    const [result] = await fetchRegistry(['styles/index.json'])

    return stylesSchema.parse(result)
  }
  catch (error) {
    throw new Error('Failed to fetch styles from registry.')
  }
}

export function getRegistryBaseColors() {
  return [
    {
      name: 'slate',
      label: 'Slate',
    },
    {
      name: 'gray',
      label: 'Gray',
    },
    {
      name: 'zinc',
      label: 'Zinc',
    },
    {
      name: 'neutral',
      label: 'Neutral',
    },
    {
      name: 'stone',
      label: 'Stone',
    },
  ]
}

export async function getRegistryBaseColor(baseColor: string) {
  try {
    const [result] = await fetchRegistry([`colors/${baseColor}.json`])

    return registryBaseColorSchema.parse(result)
  }
  catch (error) {
    throw new Error('Failed to fetch base color from registry.')
  }
}

export async function resolveTree(
  index: z.infer<typeof registryIndexSchema>,
  names: string[],
) {
  const tree: z.infer<typeof registryIndexSchema> = []

  for (const name of names) {
    const entry = index.find(entry => entry.name === name)

    if (!entry)
      continue

    tree.push(entry)

    if (entry.registryDependencies) {
      const dependencies = await resolveTree(index, entry.registryDependencies)
      tree.push(...dependencies)
    }
  }

  return tree.filter(
    (component, index, self) =>
      self.findIndex(c => c.name === component.name) === index,
  )
}

export async function fetchTree(
  style: string,
  tree: z.infer<typeof registryIndexSchema>,
) {
  try {
    const paths = tree.map(item => `styles/${style}/${item.name}.json`)
    const result = await fetchRegistry(paths)

    return registryWithContentSchema.parse(result)
  }
  catch (error) {
    throw new Error('Failed to fetch tree from registry.')
  }
}

export function getItemTargetPath(
  config: Config,
  item: Pick<z.infer<typeof registryItemWithContentSchema>, 'type'>,
  override?: string,
) {
  // Allow overrides for all items but ui.
  if (override)
    return override

  if (item.type === 'components:ui' && config.aliases.ui)
    return config.resolvedPaths.ui

  const [parent, type] = item.type.split(':')
  if (!(parent in config.resolvedPaths))
    return null

  return path.join(
    config.resolvedPaths[parent as keyof typeof config.resolvedPaths],
    type,
  )
}

async function fetchRegistry(paths: string[]) {
  try {
    const results = await Promise.all(
      paths.map(async (path) => {
        const response = await ofetch(`${baseUrl}/registry/${path}`, {
          // @ts-expect-error agent type
          agent,
        })

        return response
      }),
    )
    return results
  }
  catch (error) {
    consola.error(error)
    throw new Error(`Failed to fetch registry from ${baseUrl}.`)
  }
}
