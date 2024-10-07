<template>
  <div class="p-4 mb-4 bg-gray-100 shadow-sm">

    <!-- card top half -->
    <div class="flex flex-col items-start md:flex-row">

      <!-- col 1 -->
      <div class="flex flex-row flex-shrink-0 w-full mb-4 md:w-auto md:mr-4 md:mb-0">

        <!-- upvote/downvote -->
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col items-center mb-2">
            <button @click="upvote" class="p-1 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <span class="mx-1 text-sm font-bold">{{ votes }}</span>
            <button @click="downvote" class="p-1 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- image -->
        <div class="flex-grow ml-4">
          <img :src="company.image" :alt="company.name" class="object-cover w-full h-auto max-w-xs" />
        </div>
      </div>

      <!-- col 2 -->
      <div class="flex-grow w-full md:mr-4">
        <div class="flex flex-col items-start justify-between mb-2 md:flex-row md:items-center md:mb-0">

          <div class="mb-2 md:mb-0">

            <!-- company name -->
            <NuxtLink :to="company.slug">
              <h2 class="text-xl font-bold">{{ company.name }}</h2>
            </NuxtLink>

            <!-- company oneliner -->
            <p class="my-2 text-sm text-gray-700">{{ company.description }}</p>

            <!--  read more -->
            <button @click="toggleExpanded" class="flex items-center text-sm">
              {{ isExpanded ? 'Read less' : 'Read more' }}
              <svg :class="{ 'transform rotate-180': isExpanded }" class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- col 3 -->
      <div class="flex flex-col items-center justify-between w-full h-full space-y-4 md:w-auto">

        <!-- view website button -->
        <Button class="flex-1">
          <a :href="company.website" target="_blank" class="px-1 py-1 text-xs transition-color">View Website</a>
        </Button>

        <!-- ratings -->
        <div class="flex items-center flex-1">
          <span class="text-3xl font-bold">{{ company.rating }}</span>
          <span class="font-bold text-md">/5</span>
        </div>
      </div>
    </div>

    <!-- card bottom half -->
    <div v-if="isExpanded" class="my-10">
      <div class="py-4 mb-4 border-t border-b">
        <p class="text-sm text-gray-700">{{ company.overview }}</p>
      </div>

      <!-- pros & cons -->
      <div class="pb-4 mb-4 border-b">
        <div class="flex flex-col md:flex-row">
          <div class="w-full mb-4 md:w-1/2 md:pr-4 md:mb-0">
            <h3 class="mb-2 text-lg font-bold">Pros</h3>
            <ul class="pl-5 text-sm text-gray-700 list-disc">
              <li v-for="pro in company.pros" :key="pro">{{ pro }}</li>
            </ul>
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="mb-2 text-lg font-bold">Cons</h3>
            <ul class="pl-5 text-sm text-gray-700 list-disc">
              <li v-for="con in company.cons" :key="con">{{ con }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- features-->
      <div>
        <h3 class="mb-2 text-lg font-bold">Features</h3>
        <ul class="pl-5 text-sm text-gray-700 list-disc">
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