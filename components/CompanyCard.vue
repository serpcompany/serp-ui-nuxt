<template>
  <div class="mb-4 border p-4">
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

        <!-- company logo -->
        <div class="ml-4 flex-grow">
          <img
            :src="company.logo"
            :alt="company.name"
            class="h-10 w-full max-w-xs"
            loading="lazy"
          />
        </div>
      </div>

      <!-- col 2 -->
      <div class="w-full flex-grow md:mr-4">
        <div
          class="mb-2 flex flex-col items-start justify-between md:mb-0 md:flex-row md:items-center"
        >
          <div class="mb-2 text-black md:mb-0">
            <!-- company name -->
            <NuxtLink :to="company.slug">
              <h2 class="text-xl font-bold">{{ company.name }}</h2>
            </NuxtLink>

            <!-- company oneliner -->
            <p class="my-2 text-sm text-gray-700">{{ company.description }}</p>

            <!--  read more -->
            <button
              v-if="showReadMore"
              class="mt-2 flex items-center text-sm"
              @click="toggleExpanded"
            >
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
        <Button class="flex-1 text-white">
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
    <div v-if="isExpanded && showExpandedContent" class="my-10">
      <div class="border-t py-8">
        <p class="text-sm text-gray-700">{{ company.overview }}</p>
      </div>

      <!-- pros & cons -->
      <div v-if="showProsAndCons" class="mb-8 border-b pb-8 text-black">
        <div class="flex flex-col md:flex-row">
          <div class="mb-4 w-full md:mb-0 md:w-1/2 md:pr-4">
            <h3 class="mb-4 text-lg font-bold text-black">Pros</h3>
            <ul class="list-disc pl-5 text-sm text-gray-700">
              <li v-for="pro in company.pros" :key="pro">{{ pro }}</li>
            </ul>
          </div>
          <div class="w-full md:w-1/2">
            <h3 class="mb-4 text-lg font-bold text-black">Cons</h3>
            <ul class="list-disc pl-5 text-sm text-gray-700">
              <li v-for="con in company.cons" :key="con">{{ con }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- features-->
      <div v-if="showFeatures">
        <h3 class="pb-4 text-lg font-bold text-black">Features</h3>
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
  showReadMore: {
    type: Boolean,
    default: true,
  },
  showProsAndCons: {
    type: Boolean,
    default: true,
  },
  showFeatures: {
    type: Boolean,
    default: true,
  },
  showExpandedContent: {
    type: Boolean,
    default: true,
  },
});

const isExpanded = ref(false);
const votes = props.company.votes || 0;

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
