<!-- pages/company/collection.vue -->
<template>
  <div class="container py-10">
    <!-- hero -->
    <section></section>

    <!-- main -->
    <main>

      <!-- section of cards -->
      <section>
        <!-- card -->
        <div class="container py-10">
          <ProductCard v-for="company in companies" :key="company.id" :company="company" />
          <!-- card top -->
          <!-- card bottom -->
        </div>
      </section>


      <!-- pagination -->
      <section>
        <div class="container flex justify-center">
          <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="1">
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

      <!-- link hub -->
      <section>
        <LinkHub :tags="tags" />
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
import ProductCard from '@/components/CompanyCard.vue';
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
    name: 'Stupid Solutions',
    oneline: 'Revolutionizing software development with AI-powered tools.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.techinnovate.com',
    description: 'TechInnovate Solutions is at the forefront of software development innovation. Our AI-powered tools streamline the development process, enhance code quality, and significantly reduce time-to-market for software projects. From startups to enterprise-level organizations, we provide cutting-edge solutions that drive efficiency and foster innovation.',
    rating: 4.7,
    reviews: 230,
    pros: [
      "Advanced AI-powered development tools",
      "Significant reduction in development time",
      "Comprehensive suite of integrated tools",
      "Excellent customer support"
    ],
    cons: [
      "Steep learning curve for new users",
      "Higher price point compared to traditional tools",
      "Requires consistent internet connection"
    ],
    features: [
      "AI-assisted code completion and refactoring",
      "Automated bug detection and fixing",
      "Real-time collaboration tools",
      "Integrated version control system",
      "Cloud-based development environment"
    ],
    overview: "TechInnovate Solutions offers a revolutionary approach to software development. Our AI-powered platform not only accelerates the coding process but also enhances code quality and team collaboration. While the initial learning curve may be steep, the long-term benefits in terms of productivity and code quality are substantial. Ideal for forward-thinking development teams looking to stay ahead in the rapidly evolving tech landscape."
  },
  {
    id: 2,
    name: 'EcoTech Innovations',
    oneline: 'Sustainable technology solutions for a greener future.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.ecotechinnovations.com',
    description: 'EcoTech Innovations is dedicated to developing sustainable technology solutions that address environmental challenges. Our products range from energy-efficient smart home devices to large-scale renewable energy systems. We believe in harnessing the power of technology to create a more sustainable and eco-friendly world.',
    rating: 4.5,
    reviews: 180,
    pros: [
      "Eco-friendly and sustainable products",
      "Innovative and cutting-edge technology",
      "Significant energy savings for users",
      "Strong commitment to environmental causes"
    ],
    cons: [
      "Higher initial cost compared to conventional alternatives",
      "Limited product range",
      "Some products require professional installation"
    ],
    features: [
      "Smart home energy management systems",
      "Solar-powered IoT devices",
      "AI-driven energy optimization",
      "Carbon footprint tracking and reporting",
      "Integration with existing smart home ecosystems"
    ],
    overview: "EcoTech Innovations is pioneering the integration of sustainability and technology. Their products offer tangible benefits in terms of energy savings and environmental impact. While the initial investment may be higher, the long-term savings and positive environmental impact make their solutions attractive to eco-conscious consumers and businesses. The company's commitment to sustainability extends beyond their products to their operations, making them a true leader in green technology."
  },
  {
    id: 3,
    name: 'HealthTech Dynamics',
    oneline: 'Transforming healthcare through innovative digital solutions.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.healthtechdynamics.com',
    description: 'HealthTech Dynamics is revolutionizing the healthcare industry with its suite of digital health solutions. From telemedicine platforms to AI-powered diagnostic tools, were making healthcare more accessible, efficient, and personalized. Our mission is to improve patient outcomes and streamline healthcare delivery through cutting- edge technology.',
    rating: 4.6,
    reviews: 210,
    pros: [
      "Comprehensive suite of digital health solutions",
      "Improves accessibility to healthcare services",
      "AI-powered diagnostics for faster and more accurate results",
      "User-friendly interfaces for both patients and healthcare providers"
    ],
    cons: [
      "Requires reliable internet connection for full functionality",
      "Some features may have a learning curve for non-tech-savvy users",
      "Initial setup and integration can be complex for healthcare providers"
    ],
    features: [
      "Telemedicine platform with video consultations",
      "AI-assisted diagnosis and treatment recommendations",
      "Electronic Health Records (EHR) management",
      "Remote patient monitoring systems",
      "Secure messaging between patients and healthcare providers"
    ],
    overview: "HealthTech Dynamics is at the forefront of the digital health revolution. Their comprehensive suite of solutions addresses many of the current challenges in healthcare delivery, from accessibility issues to the need for more personalized care. While the transition to digital health platforms may present some initial challenges, the long-term benefits in terms of improved patient care and operational efficiency are significant. HealthTech Dynamics is well-positioned to play a crucial role in shaping the future of healthcare."
  }
];

</script>