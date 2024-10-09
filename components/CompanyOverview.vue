<template>
  <section>
    <div>
      <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    </div>
    <p
      v-for="(paragraph, index) in company.overview"
      :key="index"
      class="mb-4 text-muted-foreground"
    >
      {{ paragraph }}
    </p>
  </section>
</template>

<script setup lang="ts">
import type { Company } from '@/types/index.ts';

const props = defineProps<{
  section: string;
  company: Company;
}>();
</script>
