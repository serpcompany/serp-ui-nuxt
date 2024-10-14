<template>
  <div class="space-y-5">
    <div class="flex flex-col items-center md:flex-row md:items-start">
      <div class="mb-4 text-center md:mb-0 md:mr-8 md:w-auto">
        <h3 class="text-4xl font-bold">{{ averageRating }}</h3>
        <p class="text-sm">({{ totalReviews }} reviews)</p>
      </div>
      <div class="order-3 w-full md:order-2 md:flex-1">
        <div
          v-for="(percentage, index) in ratingPercentages"
          :key="index"
          class="mb-3"
        >
          <div class="h-1.5 w-full bg-gray-200">
            <div
              class="h-1.5 bg-yellow-400"
              :style="{ width: `${percentage}%` }"
            />
          </div>
        </div>
      </div>
      <div class="order-2 w-full md:order-3 md:w-auto">
        <div
          v-for="(percentage, index) in ratingPercentages"
          :key="index"
          class="flex items-center"
        >
          <span class="flex">
            <Star
              v-for="star in 5"
              :key="star"
              :class="[
                'h-3 w-3',
                star <= 5 - index ? 'text-yellow-400' : 'text-gray-300',
              ]"
            />
          </span>
          <span class="ml-1 text-sm">{{ percentage }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const averageRating = computed(() => {
  const sum = props.reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / props.reviews.length;
});

const totalReviews = computed(() => props.reviews.length);

const ratingPercentages = computed(() => {
  const counts = [0, 0, 0, 0, 0];
  props.reviews.forEach((review) => {
    const index = Math.floor(review.rating) - 1;
    counts[index]++;
  });
  return counts.reverse().map((count) => (count / totalReviews.value) * 100);
});
</script>
