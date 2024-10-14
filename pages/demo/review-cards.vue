<template>
  <div class="review-card">
    <review-section :reviews="reviews" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ReviewSection from '@/components/ReviewSection.vue';
import reviewsData from '@/data/reviews.json';

const reviews = ref(reviewsData);
</script>
