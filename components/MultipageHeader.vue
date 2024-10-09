<template>
  <div>
    <header ref="header" :class="{ 'py-2': isScrolled, 'py-8': !isScrolled }">
      <div class="mx-auto max-w-4xl px-4">
        <h1
          class="text-3xl font-bold text-primary transition-all duration-300"
          :class="{ 'text-xl': isScrolled }"
        >
          {{ company.name }}
        </h1>
        <p
          class="pt-2 text-sm text-muted-foreground transition-all duration-300"
          :class="{ hidden: isScrolled }"
        >
          {{ company.oneliner }}
        </p>
        <nav
          class="mt-4 flex space-x-4 border-b border-t"
          :class="{ 'mt-2': isScrolled }"
        >
          <a
            v-for="section in sections"
            :key="section"
            :href="'#' + section.toLowerCase()"
            class="py-2 text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            {{ section }}
          </a>
        </nav>
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
