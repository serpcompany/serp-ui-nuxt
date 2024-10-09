<!-- components/FaqSection.vue -->
<template>
  <section>
    <div class="prose mt-20 max-w-none">
      <h2 class="my-5 text-4xl font-bold text-black">
        Frequently Asked Questions
      </h2>
      <div class="w-full max-w-none">
        <Accordion type="single" collapsible>
          <AccordionItem
            v-for="faq in faqs"
            :key="faq.id"
            :value="faq.id"
            class="w-full"
          >
            <AccordionTrigger
              class="flex items-center justify-between text-xl"
              >{{ faq.question }}</AccordionTrigger
            >
            <AccordionContent class="text-lg">{{
              faq.answer
            }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const props = defineProps<{
  faqs: Array<{ id: number; question: string; answer: string }>;
}>();
</script>
