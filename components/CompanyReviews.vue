<template>
  <div>
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <review-section :reviews="company.reviews" />
  </div>
</template>

<script setup lang="ts">
import type { Company, Reviews } from '@/types/index.ts';
import ReviewSection from '@/components/ReviewSection.vue';

const props = defineProps<{
  section: string;
  company: Company;
}>();
</script>
