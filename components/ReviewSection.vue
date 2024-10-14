<template>
  <div>
    <div
      v-for="review in reviews"
      :key="review.id"
      class="mb-4 border-b pb-4 last:border-b-0"
    >
      <div class="flex items-start">
        <img
          :src="review.avatar"
          :alt="review.fullname"
          class="mr-4 h-12 w-12 rounded-full"
        />
        <div>
          <h4 class="font-semibold">
            {{ review.fullname }}
            <span class="ml-2 text-sm text-gray-500">{{
              formatDate(review.date)
            }}</span>
          </h4>
          <div class="mb-2 flex items-center">
            <div class="flex">
              <StarIcon
                v-for="i in 5"
                :key="i"
                :class="{
                  'text-yellow-400': i <= review.rating,
                  'text-gray-300': i > review.rating,
                }"
              />
            </div>
            <span class="ml-2 text-sm">{{ review.rating.toFixed(1) }}</span>
          </div>
          <p class="text-sm">{{ review.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';

const StarIcon = (props, context) => {
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      class: 'h-4 w-4',
    },
    [
      h('path', {
        d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
      }),
    ],
  );
};

const props = defineProps({
  reviews: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
