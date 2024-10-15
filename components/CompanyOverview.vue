<template>
  <section>
    <div
      class="flex flex-col justify-between gap-6 md:flex-row md:gap-3 lg:gap-4 xl:gap-6"
    >
      <!-- Left Column: Media Gallery -->
      <div class="flex w-full flex-col gap-4 md:max-w-[444px]">
        <div class="aspect-video border">
          <div
            class="relative flex h-full w-full cursor-pointer items-center justify-center"
          >
            <img
              :src="
                company.screenshots[0]?.image ||
                'https://via.placeholder.com/444x250'
              "
              alt="Main Image"
              class="h-full w-full object-cover"
            />
            <div
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div v-for="screenshot in company.screenshots" :key="screenshot.id">
            <div class="flex h-full w-full items-center justify-center">
              <img
                :src="screenshot.image"
                alt="{{ company.name }} screenshot"
                class="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Overview and Details -->
      <div class="w-full md:flex-1">
        <h2 class="mb-5 text-xl font-bold">{{ section }}</h2>
        <p class="text-md mb-6 leading-relaxed">
          {{ company.overview }}
        </p>
        <div class="border-b border-t border-gray-500 py-2">
          <OverviewSheet :company="company" />
          <div v-if="detailsOpen">
            <p>{{ company.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OverviewSheet from '@/components/OverviewSheet.vue';

const props = defineProps<{
  section: string;
  company: Company;
}>();
</script>
