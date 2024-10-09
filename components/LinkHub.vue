<template>
  <section>
    <div class="mx-auto">
      <div class="pt-12">
        <div>
          <span class="inline-block py-4 text-3xl font-bold">{{
            headline
          }}</span>
        </div>
      </div>

      <div
        class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="tag in tags" :key="tag.slug" class="border-t">
          <NuxtLink :to="tag.slug" class="mt-3 flex font-medium">
            {{ tag.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  tags: {
    type: Array,
    required: true,
  },
  headline: {
    type: String,
    default: null,
  },
});
</script>
