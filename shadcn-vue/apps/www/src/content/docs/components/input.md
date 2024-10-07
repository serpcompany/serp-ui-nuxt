---
title: Input
description: Displays a form input field or a component that looks like an input field.
---

<ComponentPreview name="InputDemo" class="max-w-xs" />

## Installation

<TabPreview name="CLI">
<template #CLI>

```bash
npx shadcn-vue@latest add input
```
</template>

<template #Manual>

<Steps>

### Copy and paste the following code into your project:

<<< @/lib/registry/default/ui/input/Input.vue

</Steps>

</template>
</TabPreview>

## Usage

```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input />
</template>
```

## Examples

### Default

<ComponentPreview name="InputDemo" class="max-w-xs" />

### File

<ComponentPreview name="InputFile" class="max-w-xs" />

### Disabled

<ComponentPreview name="InputDisabled" class="max-w-xs" />

### With Label

<ComponentPreview name="InputWithLabel" class="max-w-xs" />

### With Button

<ComponentPreview name="InputWithButton" class="max-w-xs" />

### With Icon

<ComponentPreview name="InputWithIcon" class="max-w-xs" />

### Form

<ComponentPreview name="InputForm" />
