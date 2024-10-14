export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/serp-ui-nuxt/',
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint'],
  ssr: true,
  target: 'static',
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default './components/ui'
     */
    componentDir: './components/ui',
  },

  compatibilityDate: '2024-10-06',
});
