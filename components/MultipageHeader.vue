<template>
  <div>
    <header
      ref="header"
      :class="{
        'py-2': isScrolled,
        'py-4 sm:py-8': !isScrolled,
        'fixed left-0 top-0 z-50 w-full bg-white': isScrolled,
      }"
    >
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <!-- header top (company info) -->
        <div class="flex flex-col items-center justify-between sm:flex-row">
          <div
            class="flex w-full items-center justify-between sm:justify-start"
          >
            <!-- company image/logo -->
            <img
              :src="company.image"
              :alt="`${company.name} logo`"
              class="object-contain transition-all duration-300"
              :class="{ 'h-10': isScrolled, 'h-16': !isScrolled }"
            />

            <!-- company info -->
            <div
              class="ml-4 flex-grow"
              :class="{ 'hidden sm:block': isScrolled }"
            >
              <h1
                class="text-2xl font-bold text-primary transition-all duration-300 sm:text-3xl"
                :class="{
                  'text-xl sm:text-lg': isScrolled,
                  'mt-0': isScrolled,
                }"
              >
                {{ company.name }}
              </h1>
              <p
                class="text-xs transition-all duration-300"
                :class="{
                  'hidden sm:block': isScrolled,
                  'pt-1 text-muted-foreground sm:pt-2 sm:text-sm': !isScrolled,
                }"
              >
                {{ company.oneliner }}
              </p>
            </div>

            <!-- Mobile button when scrolled -->
            <div
              class="ml-4 flex-grow sm:hidden"
              :class="{ hidden: !isScrolled }"
            >
              <a
                :href="company.website"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-red-500 px-4 py-2 text-xs text-white"
              >
                View Website
              </a>
            </div>
          </div>

          <!-- Desktop button -->
          <div
            class="mt-4 w-full sm:mt-0 sm:w-auto"
            :class="{ 'hidden sm:block': isScrolled }"
          >
            <a
              :href="company.website"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-red-500 px-4 py-2 text-xs text-white transition-opacity duration-300 sm:w-auto sm:text-sm"
            >
              View Website
            </a>
          </div>
        </div>
        <!-- header bottom (nav links) -->
        <div
          class="-mx-4 mt-4 overflow-x-auto px-4 sm:px-0"
          :class="{ 'mt-2': isScrolled }"
        >
          <nav class="flex space-x-4 whitespace-nowrap border-b border-t">
            <a
              v-for="section in sections"
              :key="section"
              :href="'#' + section.toLowerCase()"
              class="flex-shrink-0 px-1 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary sm:px-2 sm:text-base"
            >
              {{ section }}
            </a>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  company: {
    type: Object,
    required: true,
  },
  sections: {
    type: Array as () => string[],
    required: true,
  },
});

const header = ref(null);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
