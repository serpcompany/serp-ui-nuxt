<!-- pages/company/collection.vue -->
<template>
  <div class="container py-10">
    <!-- hero -->
    <section>
      <hero-section
        headline="Find the Best Software Companies 💩"
        subheadline="Discover top-rated software companies and tools for your business."
        :show-search-bar="true"
        :show-buttons="false"
      />
    </section>

    <!-- main -->
    <main>
      <!-- rows -->
      <section>
        <div class="py-10">
          <company-card
            v-for="company in companies"
            :key="company.id"
            :company="company"
            :show-read-more="true"
            :show-pros-and-cons="true"
            :show-features="true"
            :show-expanded-content="true"
          />
        </div>
      </section>

      <!-- pagination -->
      <section>
        <div class="container flex justify-center">
          <Pagination
            v-slot="{ page }"
            :total="100"
            :sibling-count="1"
            show-edges
            :default-page="1"
          >
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
              <PaginationFirst />
              <PaginationPrev />
              <template v-for="(item, index) in items">
                <PaginationListItem
                  v-if="item.type === 'page'"
                  :key="index"
                  :value="item.value"
                  as-child
                >
                  <Button
                    class="h-10 w-10 p-0"
                    :variant="item.value === page ? 'default' : 'outline'"
                  >
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
              </template>
              <PaginationNext />
              <PaginationLast />
            </PaginationList>
          </Pagination>
        </div>
      </section>

      <!-- link hub -->
      <link-hub :tags="tags" headline="Related" />

      <!-- article section -->
      <section>
        <div class="mt-20">
          <!-- article -->
          <article-section />
        </div>
      </section>

      <!-- faqs -->
      <faq-section :faqs="faqs" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import companiesData from '@/data/companies.json';
const companies = ref(companiesData.companies);
console.log('Companies data:', companies.value);

const tags = [
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
  },
  {
    name: 'SEO',
    slug: 'seo',
  },
  {
    name: 'PPC',
    slug: 'ppc',
  },
  {
    name: 'Python',
    slug: 'python',
  },
  {
    name: 'Marketing',
    slug: 'marketing',
  },
  {
    name: 'Sales',
    slug: 'sales',
  },
  {
    name: 'Lead Generation',
    slug: 'lead-generation',
  },
  {
    name: 'CRM',
    slug: 'crm',
  },
  {
    name: 'Project Management',
    slug: 'project-management',
  },
  {
    name: 'Image Generation',
    slug: 'image-generation',
  },
  {
    name: 'Spreadsheets',
    slug: 'spreadsheets',
  },
  {
    name: 'Calendar Apps',
    slug: 'calendar-apps',
  },
  {
    name: 'Blueberry Pie',
    slug: 'blueberry-pie',
  },
  {
    name: 'Borscht',
    slug: 'borscht',
  },
  {
    name: 'Breakfast and Brunch',
    slug: 'breakfast-and-brunch',
  },
  {
    name: 'Breakfast Burritos',
    slug: 'breakfast-burritos',
  },
  {
    name: 'Breakfast Casseroles',
    slug: 'breakfast-casseroles',
  },
  {
    name: 'Breakfast Potatoes',
    slug: 'breakfast-potatoes',
  },
  {
    name: 'Breakfast Stratas',
    slug: 'breakfast-stratas',
  },
  {
    name: 'Broccoli Salads',
    slug: 'broccoli-salads',
  },
  {
    name: 'Brownies',
    slug: 'brownies',
  },
  {
    name: 'Bruschetta',
    slug: 'bruschetta',
  },
  {
    name: 'Buffalo Chicken Dips',
    slug: 'buffalo-chicken-dips',
  },
  {
    name: 'Buffalo Chicken Wings',
    slug: 'buffalo-chicken-wings',
  },
  {
    name: 'Burritos',
    slug: 'burritos',
  },
  {
    name: 'Butternut Squash Soups',
    slug: 'butternut-squash-soups',
  },
];

const faqs = [
  {
    id: 1,
    question: 'What is an email marketing tool?',
    answer:
      'An email marketing tool is a software application that allows businesses to create, send, and track email campaigns to their target audience. These tools typically offer features such as email templates, list management, automation, and analytics to help businesses optimize their email marketing efforts.',
  },
  {
    id: 2,
    question: 'Is email still an effective marketing tool?',
    answer:
      'Yes, email marketing remains one of the most effective digital marketing channels for businesses. It offers a high return on investment (ROI), allows for personalized communication with customers, and can be used to drive engagement and conversions. With the right strategy and tools, businesses can leverage email marketing to reach their target audience and achieve their marketing goals.',
  },
  {
    id: 3,
    question: 'Which industry needs email marketing the most?',
    answer:
      'Email marketing can be beneficial for businesses in a wide range of industries, including e-commerce, retail, B2B services, and more. Any business that wants to communicate with its customers, build brand awareness, drive traffic to its website, or generate leads can benefit from email marketing. By creating targeted and engaging email campaigns, businesses can connect with their audience, nurture relationships, and drive conversions.',
  },
];
</script>
