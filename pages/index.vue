<template>
  <div class="container py-10">
    <h1 class="text-3xl">Modules</h1>
    <h2 class="mt-6 text-2xl">Blog</h2>
    <ul class="list-disc pl-5">
      <li>
        <NuxtLink to="/blog/">Index</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/single">Single</NuxtLink>
      </li>
    </ul>

    <h2 class="mt-6 text-2xl">Company</h2>
    <ul class="list-disc pl-5">
      <li>
        <NuxtLink to="/company">Index</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/company/collection">Collection</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/company/multipage">Single - Multipage</NuxtLink>
      </li>
    </ul>
  </div>
</template>
