<template>
  <div>
    <div class="py-24">
      <div class="container">
        <div class="items-center">
          <div
            class="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h1 class="my-4 text-pretty text-2xl font-bold lg:text-5xl">
              {{ headline }}
            </h1>
            <p
              v-if="subheadline"
              class="mb-8 max-w-2xl text-muted-foreground lg:text-xl"
            >
              {{ subheadline }}
            </p>
            <div
              class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
            >
              <div v-if="showSearchBar">
                <SearchBar />
              </div>
              <template v-if="showButtons">
                <Button class="w-full sm:w-auto">Primary Button</Button>
                <Button variant="outline" class="w-full sm:w-auto">
                  Buying Advice
                </Button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headline: string;
  subheadline?: string;
  showSearchBar?: boolean;
  showButtons?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  headline: '',
  subheadline: undefined,
  showSearchBar: true,
  showButtons: true,
});
</script>
