<template>
  <div class="min-h-screen bg-background text-foreground">
    <multipage-header
      :company="company"
      :sections="sections"
      class="sticky top-0 z-10 bg-background transition-all duration-300"
    />

    <main class="mx-auto max-w-4xl px-4 pb-20">
      <!-- create a dynamic section for each item in the sections array. -->
      <section
        v-for="section in sections"
        :id="section.toLowerCase()"
        :key="section"
        class="mb-20"
      >
        <!-- overview -->
        <company-overview
          v-if="section === 'Overview'"
          id="overview"
          :section="section"
          :company="company"
        />

        <!-- pricing -->
        <company-pricing
          v-else-if="section === 'Pricing'"
          id="pricing"
          :section="section"
          :company="company"
        />

        <!-- features -->
        <company-features
          v-else-if="section === 'Features'"
          id="features"
          :section="section"
          :company="company"
        />

        <!-- reviews -->
        <company-reviews
          v-else-if="section === 'Reviews'"
          id="reviews"
          :section="section"
          :company="company"
        />

        <!-- faqs -->
        <FaqSection
          v-else-if="section === 'FAQ'"
          id="faq"
          :faqs="company.faqs"
        />

        <!-- alternatives -->
        <company-alternatives
          v-else-if="section === 'Alternatives'"
          id="alternatives"
          :section="section"
          :company="company"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  'Overview',
  'Pricing',
  'Features',
  'Reviews',
  'FAQ',
  'Alternatives',
];

const company = ref({
  name: 'SoftwareCo',
  oneliner: 'Empowering businesses with innovative solutions',
  overview: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.',
    'Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.',
  ],
  pricing: [
    {
      name: 'Basic',
      price: 9.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Pro',
      price: 19.99,
      features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
    },
    {
      name: 'Enterprise',
      price: 49.99,
      features: [
        'All Pro features',
        'Feature 7',
        'Feature 8',
        'Feature 9',
        'Feature 10',
      ],
    },
  ],
  features: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.',
    'Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    'Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.',
  ],
  reviews: [
    {
      id: 1,
      author: 'John Doe',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content:
        'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    },
    {
      id: 3,
      author: 'Bob Johnson',
      content:
        'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    },
  ],
  faqs: [
    {
      id: 1,
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
      id: 2,
      question: 'Why do we use it?',
      answer:
        'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
    },
    {
      id: 3,
      question: 'Where does it come from?',
      answer:
        'Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.',
    },
  ],
  alternatives: [
    'AlternativeSoft 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'AlternativeSoft 2: Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.',
    'AlternativeSoft 3: Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.',
  ],
});

const companies = [
  {
    id: 1,
    name: 'Stupid Solutions',
    slug: 'stupid-solutions',
    oneline: 'Revolutionizing software development with AI-powered tools.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.techinnovate.com',
    description:
      'Stupid Solutions is at the forefront of software development innovation. Our AI-powered tools streamline the development process, enhance code quality, and significantly reduce time-to-market for software projects.',
    rating: 4.7,
    reviews: 230,
    pros: [
      'Advanced AI-powered development tools',
      'Significant reduction in development time',
      'Comprehensive suite of integrated tools',
      'Excellent customer support',
    ],
    cons: [
      'Steep learning curve for new users',
      'Higher price point compared to traditional tools',
      'Requires consistent internet connection',
    ],
    features: [
      'AI-assisted code completion and refactoring',
      'Automated bug detection and fixing',
      'Real-time collaboration tools',
      'Integrated version control system',
      'Cloud-based development environment',
    ],
    overview:
      'TechInnovate Solutions offers a revolutionary approach to software development. Our AI-powered platform not only accelerates the coding process but also enhances code quality and team collaboration. While the initial learning curve may be steep, the long-term benefits in terms of productivity and code quality are substantial. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  },
  {
    id: 2,
    name: 'Fart Cannon Firearms',
    slug: 'stupid-solutions',
    oneline: 'Sustainable technology solutions for a greener future.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.ecotechinnovations.com',
    description:
      'EcoTech Innovations is dedicated to developing sustainable technology solutions that address environmental challenges. Our products range from energy-efficient smart home devices.',
    rating: 4.5,
    reviews: 180,
    pros: [
      'Eco-friendly and sustainable products',
      'Innovative and cutting-edge technology',
      'Significant energy savings for users',
      'Strong commitment to environmental causes',
    ],
    cons: [
      'Higher initial cost compared to conventional alternatives',
      'Limited product range',
      'Some products require professional installation',
    ],
    features: [
      'Smart home energy management systems',
      'Solar-powered IoT devices',
      'AI-driven energy optimization',
      'Carbon footprint tracking and reporting',
      'Integration with existing smart home ecosystems',
    ],
    overview:
      "EcoTech Innovations is pioneering the integration of sustainability and technology. Their products offer tangible benefits in terms of energy savings and environmental impact. While the initial investment may be higher, the long-term savings and positive environmental impact make their solutions attractive to eco-conscious consumers and businesses. The company's commitment to sustainability extends beyond their products to their operations, making them a true leader in green technology.",
  },
  {
    id: 3,
    name: 'Poop Launcher Warehouse',
    slug: 'stupid-solutions',
    oneline: 'Transforming healthcare through innovative digital solutions.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.healthtechdynamics.com',
    description:
      'HealthTech Dynamics is revolutionizing the healthcare industry with its suite of digital health solutions. Our mission is to improve patient outcomes and streamline healthcare delivery through cutting-edge technology.',
    rating: 4.6,
    reviews: 210,
    pros: [
      'Comprehensive suite of digital health solutions',
      'Improves accessibility to healthcare services',
      'AI-powered diagnostics for faster and more accurate results',
      'User-friendly interfaces for both patients and healthcare providers',
    ],
    cons: [
      'Requires reliable internet connection for full functionality',
      'Some features may have a learning curve for non-tech-savvy users',
      'Initial setup and integration can be complex for healthcare providers',
    ],
    features: [
      'Telemedicine platform with video consultations',
      'AI-assisted diagnosis and treatment recommendations',
      'Electronic Health Records (EHR) management',
      'Remote patient monitoring systems',
      'Secure messaging between patients and healthcare providers',
    ],
    overview:
      'HealthTech Dynamics is at the forefront of the digital health revolution. Their comprehensive suite of solutions addresses many of the current challenges in healthcare delivery, from accessibility issues to the need for more personalized care. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
  },
];

const isScrolled = ref(false);

// const scrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//     history.pushState(null, '', `#${sectionId}`);
//   }
// };

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
