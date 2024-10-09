<template>
  <div class="relative w-80">
    <label for="search-input" class="sr-only">Search</label>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    <input
      id="search-input"
      v-model="modelValue"
      type="search"
      placeholder="Search"
      class="flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 pl-12 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      role="searchbox"
      aria-label="Search"
    />
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  defaultValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const defaultValueRef = toRef(props, 'defaultValue');

const modelValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: defaultValueRef.value,
});
</script>
