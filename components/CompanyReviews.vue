<template>
  <section>
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <div
      v-for="review in company.reviews"
      :key="review.id"
      class="my-6 rounded-lg border bg-card p-6"
    >
      <p class="mb-4 italic text-muted-foreground">"{{ review.content }}"</p>
      <p class="text-right font-medium">- {{ review.author }}</p>
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
