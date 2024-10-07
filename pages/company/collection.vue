<template>
  <div>
    <!-- hero -->
    <section></section>
    
    <!-- main -->
     <section>
    
     <!-- section of cards -->
      <section></section>
      <!-- card -->
        
      
      <!-- pagination -->
      <section>
        <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst />
            <PaginationPrev />

            <template v-for="(item, index) in items">
              <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext />
            <PaginationLast />
          </PaginationList>
        </Pagination>
      </section>
      
      <!-- tag cloud -->
      <section></section>
      <!-- tag -->
      
      <!-- article section -->
      <section></section>
      
        <!-- article -->
        <article></article>
          <!-- faqs -->
           <section></section>
            <!-- faq -->
</section>
  </div>
</template>


<script setup lang='ts'>
const companies = [
  {
    id: 1,
    name: 'Company 1',
    oneline: 'This is a descriptive online for the company and what they do.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.company1.com',
    description: 'This is a longer description of the company and what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    rating: 4.5,
    reviews: 100,
  },
  {
    id: 2,
    name: 'Company 2',
    oneline: 'This is a descriptive online for the company and what they do.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.company2.com',
    description: 'This is a longer description of the company and what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    rating: 4.5,
    reviews: 100,
  },
  {
    id: 3,
    name: 'Company 3',
    oneline: 'This is a descriptive online for the company and what they do.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.company3.com',
    description: 'This is a longer description of the company and what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    rating: 4.5,
    reviews: 100,
  },
  {
    id: 4,
    name: 'Company 4',
    oneline: 'This is a descriptive online for the company and what they do.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.company4.com',
    description: 'This is a longer description of the company and what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    rating: 4.5,
    reviews: 100,
  },
  {
    id: 5,
    name: 'Company 5',
    oneline: 'This is a descriptive online for the company and what they do.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.company5.com',
    description: 'This is a longer description of the company and what they do. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    rating: 4.5,
    reviews: 100,
  }
];
</script>