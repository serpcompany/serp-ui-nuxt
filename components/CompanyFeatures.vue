<template>
  <section>
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <ul class="space-y-2">
      <li
        v-for="feature in company.features"
        :key="feature"
        class="flex items-start"
      >
        <svg
          class="mr-2 h-4 w-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ feature }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Company } from '@/types/index.ts';

const props = defineProps<{
  section: string;
  company: Company;
}>();
</script>
