<template>
  <div>
    <header ref="header" :class="headerClasses">
      <div :class="containerClasses">
        <!-- header top (company info) -->
        <div class="flex flex-col items-center justify-between sm:flex-row">
          <div class="flex w-full items-center sm:justify-start">
            <!-- company image/logo -->
            <img
              :src="company.logo"
              :alt="`${company.name} logo`"
              class="rounded border-2 border-slate-200 object-contain transition-all duration-300"
              :class="{ 'h-16': isScrolled, 'h-32': !isScrolled }"
            />

            <div v-if="!isScrolled" class="ml-4 flex-grow sm:block">
              <h1
                class="font-bold transition-all duration-300"
                :class="titleClasses"
              >
                {{ company.name }}
              </h1>
              <p class="pt-1 text-xs text-muted-foreground sm:text-sm">
                {{ company.oneliner }}
              </p>
            </div>

            <div v-if="!isScrolled" class="ml-4 flex-grow sm:hidden">
              <a
                :href="company.website"
                target="_blank"
                rel="noopener"
                class="cta-button"
              >
                View Website
              </a>
            </div>
          </div>

          <!-- Desktop button -->
          <div
            v-if="!isScrolled"
            class="mt-4 hidden w-full sm:mt-0 sm:block sm:w-auto"
          >
            <a
              :href="company.website"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border-2 border-blue-500 px-4 py-2 text-xs text-blue-500 transition-opacity duration-300 sm:w-auto sm:text-sm"
            >
              View Website
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div :class="navContainerClasses">
          <nav ref="nav" class="relative flex border-b px-4 sm:px-0">
            <a
              v-for="section in sections"
              :key="section"
              class="nav-link relative mx-2 flex-grow cursor-pointer py-2 text-center transition-colors duration-300"
              :class="{ 'text-blue-500': navTab === section }"
              :aria-current="navTab === section ? 'page' : undefined"
              @click="handleTabChange(section)"
            >
              {{ section }}
            </a>
            <div
              v-show="!isScrolled"
              ref="underline"
              class="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out"
              :style="underlineStyle"
            />
            <div
              v-show="isScrolled"
              ref="underline"
              class="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out"
              :style="underlineStyle"
            />
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  watchEffect,
  nextTick,
} from 'vue';
import { debounce } from '@/lib/utils';

interface Company {
  logo: string;
  name: string;
  oneliner: string;
  website: string;
}

const props = defineProps<{
  company: Company;
  sections: string[];
}>();

const header = ref<HTMLElement | null>(null);
const nav = ref<HTMLElement | null>(null);
const underline = ref<HTMLElement | null>(null);

const isScrolled = ref(false);
const navTab = ref<string>();
const activeIndex = ref(0);

watchEffect(() => {
  navTab.value = props.sections[0];
});

const headerClasses = computed(
  () =>
    `w-full transition-all duration-300 bg-white ${
      isScrolled.value ? 'py-2' : 'py-4 sm:py-8'
    }`,
);

const containerClasses = computed(
  () =>
    `mx-auto max-w-4xl flex ${
      isScrolled.value ? 'flex-row items-center' : 'flex-col justify-between'
    }`,
);

const navContainerClasses = computed(
  () => `mt-4 ${isScrolled.value ? 'mt-2 ml-auto' : ''}`,
);

const titleClasses = computed(
  () =>
    `transition-all text-primary duration-300 ${
      isScrolled.value ? 'text-xl sm:text-lg' : 'text-2xl sm:text-3xl'
    }`,
);

const underlineStyle = computed(() => {
  if (!nav.value || !underline.value) return {};

  const navItems = nav.value.querySelectorAll('.nav-link');
  const activeItem = navItems[activeIndex.value];
  if (!activeItem) return {};

  const navRect = nav.value.getBoundingClientRect();
  const activeRect = activeItem.getBoundingClientRect();

  return {
    width: `${activeRect.width}px`,
    transform: `translateX(${activeRect.left - navRect.left}px)`,
  };
});

const handleTabChange = (tab: string) => {
  navTab.value = tab;
  activeIndex.value = props.sections.indexOf(tab);

  const sectionElement = document.getElementById(tab.toLowerCase());
  const headerHeight = header.value?.offsetHeight || 0;

  if (sectionElement) {
    window.scrollTo({
      top: sectionElement.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  }
};

// whenn we scroll a little than causes isScrolled to become true
// which contracts the multi header
// which causes isScrolled to become false
const handleScroll = debounce(() => {
  const newValue = window.scrollY > 0;
  if (isScrolled.value !== newValue) {
    // hence we scroll further than the user scrolls
    // so that when scrollY is small then it doesn't reset to 0
    window.scrollTo({
      top: window.scrollY * 2,
    });
    isScrolled.value = newValue;
  }
}, 50);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link {
  position: relative;
  overflow: hidden;
}
</style>
