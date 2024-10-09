<template>
  <section class="w-full">
    <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    <div class="w-full space-y-4">
      <div
        v-for="alternative in company.alternatives"
        :key="alternative.id"
        class="w-full"
      >
        <company-card :company="alternative" />
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
}>();
</script>
