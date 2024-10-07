<template>
  <div class="p-4 mb-4 bg-gray-100">
    <div class="flex flex-col md:flex-row">
      <div class="w-[200px] mr-4">
        <img :src="company.image" :alt="company.name" class="w-full h-auto" />
      </div>

      <div class="flex-grow">
        <div class="flex items-start justify-between">
          <div>
            <h2 class="text-2xl font-bold">{{ company.name }}</h2>
            <div class="flex items-center mt-1">
              <span v-for="i in 5" :key="i" class="mr-1 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span class="ml-1 text-gray-600">{{ company.rating }} ({{ company.reviews }})</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex flex-col items-center mr-4">
              <button @click="upvote" class="p-1 text-gray-500 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <span class="font-bold">{{ votes }}</span>
              <button @click="downvote" class="p-1 text-gray-500 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a :href="company.website" target="_blank" class="px-4 py-2 text-white bg-blue-500 rounded">View Website</a>
          </div>
        </div>
        <p class="mt-2">{{ company.oneline }}</p>
      </div>
    </div>

    <div class="mt-4">
      <button @click="toggleExpanded" class="flex items-center text-blue-500 hover:underline">
        {{ isExpanded ? 'Read less' : 'Read more' }}
        <svg :class="{ 'transform rotate-180': isExpanded }" class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>

    <div v-if="isExpanded" class="mt-4">
      <div class="pb-4 mb-4 border-b">
        <h3 class="mb-2 text-lg font-bold">Overview</h3>
        <p>{{ company.overview }}</p>
      </div>

      <div class="pb-4 mb-4 border-b">
        <div class="flex flex-wrap">
          <div class="w-full pr-4 md:w-1/2">
            <h3 class="mb-2 font-semibold">Pros</h3>
            <ul class="pl-5 list-disc">
              <li v-for="pro in company.pros" :key="pro">{{ pro }}</li>
            </ul>
          </div>
          <div class="w-full mt-4 md:w-1/2 md:mt-0">
            <h3 class="mb-2 font-semibold">Cons</h3>
            <ul class="pl-5 list-disc">
              <li v-for="con in company.cons" :key="con">{{ con }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-bold">Features</h3>
        <ul class="pl-5 list-disc">
          <li v-for="feature in company.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  company: {
    type: Object,
    required: true
  }
});

const isExpanded = ref(false);
const votes = ref(props.company.votes || 0);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const upvote = () => {
  votes.value++;
};

const downvote = () => {
  votes.value--;
};
</script>