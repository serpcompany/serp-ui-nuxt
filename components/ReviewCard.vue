<template>
  <div class="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
    <div class="mb-4 flex items-start">
      <img
        :src="review.avatar"
        :alt="review.fullname"
        class="mr-4 h-12 w-12 rounded-full"
      />
      <div>
        <h4 class="flex items-center text-lg font-semibold">
          {{ review.fullname }}
          <span class="ml-2 text-xs text-gray-500">{{
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
          <span class="ml-2 text-sm font-medium text-gray-700"
            >{{ review.rating }} / 5.0</span
          >
        </div>
        <div
          v-if="review.verified"
          class="mb-2 flex items-center text-sm font-semibold text-green-600"
        >
          <VerifiedIcon class="mr-1 h-4 w-4" /> Verified
        </div>
      </div>
    </div>
    <div class="mt-4 border-t border-gray-200 pt-4">
      <p class="text-gray-700">{{ review.body }}</p>
    </div>
    <div class="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
      Date of experience: {{ formatDate(review.date) }}
    </div>
    <div class="mt-4 flex items-center space-x-4">
      <button
        class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Useful
      </button>
      <button
        class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Share
      </button>
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

const VerifiedIcon = (props, context) => {
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      class: props.class,
    },
    [
      h('path', {
        fillRule: 'evenodd',
        d: 'M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z',
        clipRule: 'evenodd',
      }),
    ],
  );
};

const props = defineProps({
  review: {
    type: Object,
    required: true,
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

<style scoped>
.border {
  border-color: #e2e8f0;
}
.bg-gray-50 {
  background-color: #f9fafb;
}
.text-green-600 {
  color: #16a34a;
}
</style>
