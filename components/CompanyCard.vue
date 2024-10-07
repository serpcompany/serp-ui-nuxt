<template>
  <div class="mb-4 bg-gray-100 p-4 shadow-sm">
    <!-- card top half -->
    <div class="flex flex-col items-start md:flex-row">
      <!-- col 1 -->
      <div
        class="mb-4 flex w-full flex-shrink-0 flex-row md:mb-0 md:mr-4 md:w-auto"
      >
        <!-- upvote/downvote -->
        <div class="flex flex-col items-center justify-center">
          <div class="mb-2 flex flex-col items-center">
            <button class="p-1 text-gray-500" @click="upvote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <span class="mx-1 text-sm font-bold">{{ votes }}</span>
            <button class="p-1 text-gray-500" @click="downvote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- image -->
        <div class="ml-4 flex-grow">
          <img
            :src="company.image"
            :alt="company.name"
            class="h-auto w-full max-w-xs object-cover"
          >
        </div>
      </div>

      <!-- col 2 -->
      <div class="w-full flex-grow md:mr-4">
        <div
          class="mb-2 flex flex-col items-start justify-between md:mb-0 md:flex-row md:items-center"
        >
          <div class="mb-2 md:mb-0">
            <!-- company name -->
            <NuxtLink :to="company.slug">
              <h2 class="text-xl font-bold">{{ company.name }}</h2>
            </NuxtLink>

            <!-- company oneliner -->
            <p class="my-2 text-sm text-gray-700">{{ company.description }}</p>

            <!--  read more -->
            <button class="flex items-center text-sm" @click="toggleExpanded">
              {{ isExpanded ? 'Read less' : 'Read more' }}
              <svg
                :class="{ 'rotate-180 transform': isExpanded }"
                class="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- col 3 -->
      <div
        class="flex h-full w-full flex-col items-center justify-between space-y-4 md:w-auto"
      >
        <!-- view website button -->
        <Button class="flex-1">
          <a
            :href="company.website"
            target="_blank"
            class="transition-color px-1 py-1 text-xs"
            >View Website</a
          >
        </Button>

        <!-- ratings -->
        <div class="flex flex-1 items-center">
          <span class="text-3xl font-bold">{{ company.rating }}</span>
          <span class="text-md font-bold">/5</span>
        </div>
      </div>
    </div>

    <!-- card bottom half -->
    <div v-if="isExpanded" class="my-10">
      <div class="mb-4 border-b border-t py-4">
        <p class="text-sm text-gray-700">{{ company.overview }}</p>
      </div>

      <!-- pros & cons -->
      <div class="mb-4 border-b pb-4">
        <div class="flex flex-col md:flex-row">
          <div class="mb-4 w-full md:mb-0 md:w-1/2 md:pr-4">
            <h3 class="mb-2 text-lg font-bold">Pros</h3>
            <ul class="list-disc pl-5 text-sm text-gray-700">
              <li v-for="pro in company.pros" :key="pro">{{ pro }}</li>
            </ul>
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="mb-2 text-lg font-bold">Cons</h3>
            <ul class="list-disc pl-5 text-sm text-gray-700">
              <li v-for="con in company.cons" :key="con">{{ con }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- features-->
      <div>
        <h3 class="mb-2 text-lg font-bold">Features</h3>
        <ul class="list-disc pl-5 text-sm text-gray-700">
          <li v-for="feature in company.features" :key="feature">
            {{ feature }}
          </li>
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
    required: true,
  },
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
