<template>
  <div class="min-h-screen bg-background text-foreground">
    <header
      ref="header"
      class="sticky top-0 z-10 bg-background transition-all duration-300"
      :class="{ 'py-2': isScrolled, 'py-8': !isScrolled }"
    >
      <div class="mx-auto max-w-4xl px-4">
        <h1
          class="text-3xl font-bold text-primary transition-all duration-300"
          :class="{ 'text-2xl': isScrolled }"
        >
          {{ company.name }}
        </h1>
        <p
          class="text-sm text-muted-foreground transition-all duration-300"
          :class="{ hidden: isScrolled }"
        >
          {{ company.oneliner }}
        </p>
        <nav class="mt-4 flex space-x-4 border-b border-border">
          <a
            v-for="section in sections"
            :key="section"
            :href="'#' + section.toLowerCase()"
            class="py-2 text-muted-foreground transition-colors duration-200 hover:text-primary"
            @click.prevent="scrollToSection(section.toLowerCase())"
          >
            {{ section }}
          </a>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-4xl px-4 py-8">
      <section
        v-for="section in sections"
        :id="section.toLowerCase()"
        :key="section"
        class="mb-12"
      >
        <h2 class="mb-4 text-2xl font-semibold text-primary">
          {{ section }}
        </h2>
        <div v-if="section === 'Overview'">
          <p
            v-for="(paragraph, index) in company.overview"
            :key="index"
            class="mb-4 text-muted-foreground"
          >
            {{ paragraph }}
          </p>
        </div>
        <div
          v-else-if="section === 'Pricing'"
          class="grid gap-6 md:grid-cols-3"
        >
          <div
            v-for="plan in company.pricing"
            :key="plan.name"
            class="rounded-lg border bg-card p-6"
          >
            <h3 class="mb-2 text-xl font-semibold text-primary">
              {{ plan.name }}
            </h3>
            <p class="mb-4 text-2xl font-bold text-primary">
              ${{ plan.price }}/mo
            </p>
            <ul class="space-y-2">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-center"
              >
                <svg
                  class="mr-2 h-4 w-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if="section === 'Features'">
          <ul class="space-y-2">
            <li
              v-for="feature in company.features"
              :key="feature"
              class="flex items-start"
            >
              <svg
                class="mr-2 h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
        <div v-else-if="section === 'Reviews'" class="space-y-6">
          <div
            v-for="review in company.reviews"
            :key="review.author"
            class="rounded-lg border bg-card p-6"
          >
            <p class="mb-4 italic text-muted-foreground">
              "{{ review.content }}"
            </p>
            <p class="text-right font-medium">- {{ review.author }}</p>
          </div>
        </div>
        <div v-else-if="section === 'FAQ'" class="space-y-6">
          <div
            v-for="item in company.faq"
            :key="item.question"
            class="border-b border-border pb-4"
          >
            <h3 class="mb-2 font-semibold text-primary">{{ item.question }}</h3>
            <p class="text-muted-foreground">{{ item.answer }}</p>
          </div>
        </div>
        <div v-else-if="section === 'Alternatives'">
          <ul class="space-y-2">
            <li
              v-for="alternative in company.alternatives"
              :key="alternative"
              class="flex items-start"
            >
              <svg
                class="mr-2 h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ alternative }}</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  'Overview',
  'Pricing',
  'Features',
  'Reviews',
  'FAQ',
  'Alternatives',
];

const company = ref({
  name: 'SoftwareCo',
  oneliner: 'Empowering businesses with innovative solutions',
  overview: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.',
    'Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.',
  ],
  pricing: [
    {
      name: 'Basic',
      price: 9.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Pro',
      price: 19.99,
      features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
    },
    {
      name: 'Enterprise',
      price: 49.99,
      features: [
        'All Pro features',
        'Feature 7',
        'Feature 8',
        'Feature 9',
        'Feature 10',
      ],
    },
  ],
  features: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.',
    'Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    'Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.',
  ],
  reviews: [
    {
      author: 'John Doe',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
      author: 'Jane Smith',
      content:
        'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    },
    {
      author: 'Bob Johnson',
      content:
        'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    },
  ],
  faq: [
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
      question: 'Why do we use it?',
      answer:
        'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    },
    {
      question: 'Where does it come from?',
      answer:
        'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    },
  ],
  alternatives: [
    'AlternativeSoft 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'AlternativeSoft 2: Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.',
    'AlternativeSoft 3: Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
  ],
});

const header = ref(null);
const isScrolled = ref(false);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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
