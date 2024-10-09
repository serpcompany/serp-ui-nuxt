<template>
  <section>
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div
        v-for="plan in company.pricing"
        :key="plan.name"
        class="rounded-lg border bg-card p-6"
      >
        <h3 class="mb-2 text-xl font-semibold text-primary">
          {{ plan.name }}
        </h3>
        <p class="mb-4 text-2xl font-bold text-primary">${{ plan.price }}/mo</p>
        <ul class="space-y-2">
          <li
            v-for="feature in plan.features"
            :key="feature"
            class="flex items-center"
          >
            <svg
              class="mr-2 h-4 w-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Company } from '@/types/index.ts';

const props = defineProps<{
  section: string;
  company: Company;
}>();
</script>
