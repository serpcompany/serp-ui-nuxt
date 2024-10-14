<template>
  <div>
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <review-card v-for="review in reviews" :key="review.id" :review="review" />
  </div>
</template>

<script setup lang="ts">
import ReviewCard from '@/components/ReviewCard.vue';
import type { Reviews } from '@/types/index.ts';

const props = defineProps<{
  section: string;
  reviews: Reviews;
}>();
</script>
