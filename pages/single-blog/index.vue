<template>
  <ContentRenderer v-if="blog">
    <div class="bg-white">
      <div class="bg-primary pt-20 lg:px-14">
        <div class="flex items-center">
          <NuxtLinkLocale
            to="/blog"
            class="absolute left-3 top-20 z-10 text-white lg:left-36"
          >
            &larr; {{ $t('blog.backLabel') }}
          </NuxtLinkLocale>
          <div class="max-w-6xl px-3 py-20 lg:px-20">
            <div class="flex gap-2">
              <NuxtLink v-for="tag in blog.tags" :key="tag.name" to="/">
                <Badge class="bg-white/20 text-white">{{ tag.name }}</Badge>
              </NuxtLink>
            </div>
            <h2
              class="mt-8 text-4xl font-black tracking-tight text-white lg:text-6xl"
            >
              {{ blog.title }}
            </h2>
            <p class="mt-4 text-xl leading-8 text-gray-300">
              {{ blog.excerpt }}
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-5xl px-4">
        <div
          class="flex items-end justify-between border-b pb-4 pt-8 text-lg font-medium text-gray-400"
        >
          <div v-if="blog.author">
            <div>Author</div>
            <NuxtLink
              :to="`/blog/authors/${blog.author.slug}`"
              class="text-primary hover:underline"
              >{{ blog.author.name }}</NuxtLink
            >
          </div>
          <div>
            {{ formatDate({ date: new Date(blog.created_at) }) }}
          </div>
        </div>
        <div class="mt-6 pb-20 pt-4 lg:flex lg:gap-12">
          <div class="flex-1 lg:pl-4">
            <ContentRendererMarkdown
              :value="formattedContent"
              class="prose text-lg dark:prose-invert"
            />
          </div>
          <div class="hidden w-[310px] flex-none lg:block">
            <RecentPostsSidebar />
          </div>
        </div>
      </div>
    </div>
  </ContentRenderer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import markdownParser from '@nuxt/content/transformers/markdown';

// Mock data
const mockBlog = {
  id: 1,
  slug: 'sample-blog-post',
  title: 'Sample Blog Post Title',
  excerpt: 'This is a brief excerpt of the blog post content.',
  content: `
  # Sample Blog Post
  
  This is the main content of the blog post. It can include various markdown elements.
  
  ## Subheading
  
  - List item 1
  - List item 2
  - List item 3
  
  [Link to another page](https://example.com)
  
  ![Image description](https://example.com/image.jpg)
    `,
  created_at: '2024-10-09T12:00:00Z',
  tags: [{ name: 'Technology' }, { name: 'Web Development' }],
  author: {
    name: 'John Doe',
    slug: 'john-doe',
  },
};

// Use Nuxt's composables

// In a real scenario, you'd fetch the blog based on the slug
// For now, we'll just use the mock data
const blog = ref(mockBlog);

const formattedContent = ref('');

// Use the actual markdown parser with mock data
const parseContent = async () => {
  formattedContent.value = await markdownParser.parse(
    blog.value.id.toString(),
    blog.value.content,
    {},
  );
};

//   const slug = useRoute("blog-slug").params.slug;
//   const { formatDate } = useLocaleDate();
//   const { apiCaller } = useApiCaller();

//   const blog = await apiCaller.blog.getOneBySlug.query({ slug });
//   const formattedContent = await markdownParser.parse!(
//     blog.id.toString() || "",
//     blog.content || "",
//     {},
//   );

// Call the parsing function
parseContent();
</script>
