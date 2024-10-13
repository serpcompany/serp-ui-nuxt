<template>
  <div class="min-h-screen bg-background text-foreground">
    <multipage-header
      :company="company"
      :sections="sections"
      class="sticky top-0 z-10 bg-background transition-all duration-300"
    />

    <main class="mx-auto max-w-4xl pb-20">
      <!-- create a dynamic section for each item in the sections array. -->
      <section
        v-for="section in sections"
        :id="section.toLowerCase()"
        :key="section"
        class="mb-20"
      >
        <!-- overview -->
        <company-overview
          v-if="section === 'Overview'"
          id="overview"
          :section="section"
          :company="company"
        />

        <!-- pricing -->
        <company-pricing
          v-else-if="section === 'Pricing'"
          id="pricing"
          :section="section"
          :company="company"
        />

        <!-- features -->
        <company-features
          v-else-if="section === 'Features'"
          id="features"
          :section="section"
          :company="company"
        />

        <!-- reviews -->
        <company-reviews
          v-else-if="section === 'Reviews'"
          id="reviews"
          :section="section"
          :company="company"
        />

        <!-- faqs -->
        <FaqSection
          v-else-if="section === 'FAQ'"
          id="faq"
          :faqs="company.faqs"
        />

        <!-- alternatives -->
        <company-alternatives
          v-else-if="section === 'Alternatives'"
          id="alternatives"
          :section="section"
          :company="company"
          :companies="companies"
          :show-pros-and-cons="false"
          :show-features="false"
          :show-expanded-content="false"
          :show-read-more="false"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import companiesData from '@/data/companies.json';

const sections = [
  'Overview',
  'Pricing',
  'Features',
  'Reviews',
  'FAQ',
  'Alternatives',
];

const companies = ref(companiesData.companies);
const company = ref(companies.value[0]);

const isScrolled = ref(false);

// const scrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//     history.pushState(null, '', `#${sectionId}`);
//   }
// };

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
