<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';
import { toRef } from 'vue';

// Define props with `defineProps` and wrap them in `toRef` to retain reactivity
const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

// Use toRef to maintain reactivity for defaultValue
const defaultValueRef = toRef(props, 'defaultValue');

// Pass the reactive ref of modelValue to useVModel
const modelValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: defaultValueRef.value,
});
</script>
