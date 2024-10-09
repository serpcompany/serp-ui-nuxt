<template>
  <section class="w-full">
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <div class="w-full space-y-4">
      <div
        v-for="alternativeId in company.alternatives"
        :key="alternativeId"
        class="w-full"
      >
        <company-card
          :company="getAlternativeCompany(alternativeId)"
          :show-pros-and-cons="showProsAndCons"
          :show-features="showFeatures"
          :show-expanded-content="showExpandedContent"
          :show-read-more="showReadMore"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Company } from '@/types/index.ts';

const props = defineProps<{
  section: string;
  company: Company;
  companies: Company[];
  showReadMore: boolean;
  showProsAndCons: boolean;
  showFeatures: boolean;
  showExpandedContent: boolean;
}>();

const getAlternativeCompany = (id: number) => {
  return props.companies.find((c) => c.id === id) || ({} as Company);
};
</script>
