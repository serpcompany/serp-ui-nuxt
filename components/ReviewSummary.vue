<template>
  <div class="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
    <div class="mb-4">
      <h3 class="mb-1 text-xl font-bold">
        Reviews <span class="text-green-600">&#9733; {{ averageRating }}</span>
      </h3>
      <p class="text-sm text-gray-600">{{ totalReviews }} total</p>
    </div>
    <div class="space-y-3">
      <div
        v-for="(percentage, index) in ratingPercentages"
        :key="index"
        class="flex items-center"
      >
        <input type="checkbox" class="mr-2" />
        <span class="mr-2 text-sm">{{ 5 - index }}-star</span>
        <div class="mr-2 h-2 flex-1 overflow-hidden rounded-lg bg-gray-200">
          <div class="h-full bg-black" :style="{ width: `${percentage}%` }" />
        </div>
        <span class="text-sm">{{ percentage }}%</span>
      </div>
    </div>
    <div class="mt-6 flex items-center space-x-4">
      <button
        class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Filter
      </button>
      <div class="flex items-center">
        <label class="mr-2 text-sm font-medium text-gray-700">Sort:</label>
        <select class="rounded-lg border border-gray-300 px-2 py-1 text-sm">
          <option>Most relevant</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const averageRating = computed(() => {
  const sum = props.reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / props.reviews.length).toFixed(1);
});

const totalReviews = computed(() => props.reviews.length);

const ratingPercentages = computed(() => {
  const counts = [0, 0, 0, 0, 0];
  props.reviews.forEach((review) => {
    const index = Math.floor(review.rating) - 1;
    counts[index]++;
  });
  return counts
    .reverse()
    .map((count) => ((count / totalReviews.value) * 100).toFixed(1));
});
</script>

<style scoped>
.border {
  border-color: #e2e8f0;
}
.bg-gray-50 {
  background-color: #f9fafb;
}
.bg-black {
  background-color: #000;
}
.text-green-600 {
  color: #16a34a;
}
</style>
