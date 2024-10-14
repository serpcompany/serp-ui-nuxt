<template>
  <div>
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <review-summary :reviews="company.reviews" />
    <review-section :reviews="company.reviews" />
  </div>
</template>

<script setup lang="ts">
import type { Company } from '@/types/index.ts';
import ReviewSection from '@/components/ReviewSection.vue';
import ReviewSummary from '@/components/ReviewSummary.vue';

const props = defineProps<{
  section: string;
  company: Company;
}>();
</script>
