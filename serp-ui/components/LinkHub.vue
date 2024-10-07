<template>
  <div>
    <div class="container mx-auto">
          <div class="pt-12">
            <div>
              <span class="inline-block py-4 text-3xl font-bold">Related</span>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="tag in tags" :key="tag.slug" class="border-t">
              <NuxtLink 
                :to="tag.slug" 
                class="flex mt-3 font-medium"
              >
                {{ tag.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
  </div>
</template>

<script setup lang='ts'>
defineProps({
  tags: {
    type: Array,
    required: true,
  }
});
</script>