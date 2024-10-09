<template>
  <section>
    <div>
      <h2 class="my-5 text-4xl font-bold text-black">{{ section }}</h2>
    </div>
    <p class="mb-4 text-muted-foreground">
      {{ company.overview }}
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
