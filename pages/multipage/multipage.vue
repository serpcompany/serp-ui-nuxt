<template>
  <div class="min-h-screen bg-background p-8 text-foreground">
    <div class="mx-auto max-w-4xl">
      <header class="mb-8">
        <h1 class="mb-2 text-3xl font-bold text-primary">{{ company.name }}</h1>
        <p class="mb-6 text-lg text-muted-foreground">{{ company.tagline }}</p>

        <nav class="flex space-x-4 border-b border-border">
          <a
            v-for="section in sections"
            :key="section"
            :href="'#' + section.toLowerCase()"
            class="py-2 text-muted-foreground hover:text-primary"
            @click="scrollToSection(section.toLowerCase())"
          >
            {{ section }}
          </a>
        </nav>
      </header>

      <main>
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
              v-for="paragraph in company.overview"
              :key="paragraph"
              class="mb-4"
            >
              {{ paragraph }}
            </p>
          </div>
          <div v-else-if="section === 'Pricing'">
            <div
              v-for="plan in company.pricing"
              :key="plan.name"
              class="mb-6 rounded-lg border p-4"
            >
              <h3 class="mb-2 text-xl font-semibold">{{ plan.name }}</h3>
              <p class="mb-2 text-2xl font-bold">${{ plan.price }}/mo</p>
              <ul class="list-inside list-disc">
                <li v-for="feature in plan.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="section === 'Features'">
            <ul class="list-inside list-disc">
              <li
                v-for="feature in company.features"
                :key="feature"
                class="mb-2"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
          <div v-else-if="section === 'Reviews'">
            <div
              v-for="review in company.reviews"
              :key="review.author"
              class="mb-6 rounded-lg border p-4"
            >
              <p class="mb-2 italic">"{{ review.content }}"</p>
              <p class="text-right">- {{ review.author }}</p>
            </div>
          </div>
          <div v-else-if="section === 'FAQ'">
            <div v-for="item in company.faq" :key="item.question" class="mb-4">
              <h3 class="mb-2 font-semibold">{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </div>
          </div>
          <div v-else-if="section === 'Alternatives'">
            <ul class="list-inside list-disc">
              <li
                v-for="alternative in company.alternatives"
                :key="alternative"
                class="mb-2"
              >
                {{ alternative }}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
  tagline: 'Empowering businesses with innovative solutions',
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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
