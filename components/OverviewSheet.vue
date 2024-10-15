<template>
  <section>
    <Sheet>
      <SheetTrigger as-child>
        <span class="flex cursor-pointer items-center font-bold">
          {{ company.name }} Details
          <svg
            class="ml-2 transition-transform duration-200 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>{{ company.name }} Details</SheetTitle>
        </SheetHeader>

        <SheetFooter>
          <SheetClose as-child />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </section>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const props = defineProps<{
  company: Company;
}>();
</script>
