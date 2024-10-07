<template>
  <div class="container py-10">
    <!-- hero -->
    <section></section>
    
    <!-- main -->
    <main>
    
      <!-- section of cards -->
      <section></section>
        <!-- card -->
        
      
      <!-- pagination -->
      <section>
        <div class="container flex justify-center">
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
        </div>
      </section>
      
      <!-- tag cloud -->
      <section>
        <div class="container mx-auto">
          <div class="pt-12">
            <div>
              <span class="inline-block px-3 py-2 text-3xl font-bold">Related</span>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="tag in tags" :key="tag.slug" class="border-t">
              <NuxtLink 
                :to="tag.slug" 
                class="flex mt-2 font-medium"
              >
                {{ tag.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <!-- tag -->
      
      <!-- article section -->
      <section></section>
      
        <!-- article -->
        <article></article>
          <!-- faqs -->
           <section></section>
            <!-- faq -->
    </main>
  </div>
</template>


<script setup lang='ts'>
const tags = [
  {
    name: "Email Marketing",
    slug: "email-marketing"
  },
  {
    name: "SEO",
    slug: "seo"
  },
  {
    name: "PPC",
    slug: "ppc"
  },
  {
    name: "Python",
    slug: "python"
  },
  {
    name: "Marketing",
    slug: "marketing"
  },
  {
    name: "Sales",
    slug: "sales"
  },
  {
    name: "Lead Generation",
    slug: "lead-generation"
  },
  {
    name: "CRM",
    slug: "crm"
  },
  {
    name: "Project Management",
    slug: "project-management"
  },
  {
    name: "Image Generation",
    slug: "image-generation"
  },
  {
    name: "Spreadsheets",
    slug: "spreadsheets"
  },
  {
    name: "Calendar Apps",
    slug: "calendar-apps"
  },
  {
    name: "Blueberry Pie",
    slug: "blueberry-pie"
  },
  {
    name: "Borscht",
    slug: "borscht"
  },
  {
    name: "Breakfast and Brunch",
    slug: "breakfast-and-brunch"
  },
  {
    name: "Breakfast Burritos",
    slug: "breakfast-burritos"
  },
  {
    name: "Breakfast Casseroles",
    slug: "breakfast-casseroles"
  },
  {
    name: "Breakfast Potatoes",
    slug: "breakfast-potatoes"
  },
  {
    name: "Breakfast Stratas",
    slug: "breakfast-stratas"
  },
  {
    name: "Broccoli Salads",
    slug: "broccoli-salads"
  },
  {
    name: "Brownies",
    slug: "brownies"
  },
  {
    name: "Bruschetta",
    slug: "bruschetta"
  },
  {
    name: "Buffalo Chicken Dips",
    slug: "buffalo-chicken-dips"
  },
  {
    name: "Buffalo Chicken Wings",
    slug: "buffalo-chicken-wings"
  },
  {
    name: "Burritos",
    slug: "burritos"
  },
  {
    name: "Butternut Squash Soups",
    slug: "butternut-squash-soups"
  }
];


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