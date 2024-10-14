<template>
  <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <h1 class="mb-2 text-4xl font-bold text-primary">
      Improve a Fixed Model the Data-Centric Way!
    </h1>
    <p class="mb-8 text-lg text-muted-foreground">
      Playground Series - Season 3, Episode 21
    </p>

    <nav class="mb-8 flex space-x-6 border-b border-border">
      <a
        href="#"
        class="border-b-2 border-primary py-2 font-medium text-primary"
        >Overview</a
      >
      <a href="#" class="py-2 text-muted-foreground hover:text-primary">Data</a>
      <a href="#" class="py-2 text-muted-foreground hover:text-primary">Code</a>
      <a href="#" class="py-2 text-muted-foreground hover:text-primary"
        >Models</a
      >
      <a href="#" class="py-2 text-muted-foreground hover:text-primary"
        >Discussion</a
      >
      <a href="#" class="py-2 text-muted-foreground hover:text-primary"
        >Leaderboard</a
      >
      <a href="#" class="py-2 text-muted-foreground hover:text-primary"
        >Rules</a
      >
    </nav>

    <div class="flex flex-col gap-8 lg:flex-row">
      <div class="lg:w-2/3">
        <h2 class="mb-4 text-2xl font-semibold text-primary">Overview</h2>

        <div class="mb-8">
          <div class="mb-2 flex justify-between">
            <div>
              <h3 class="font-medium text-primary">Start</h3>
              <p class="text-muted-foreground">Aug 21, 2023</p>
            </div>
            <div class="text-right">
              <h3 class="font-medium text-primary">Close</h3>
              <p class="text-muted-foreground">Sep 11, 2023</p>
            </div>
          </div>
          <div class="h-2 w-full rounded-full bg-secondary">
            <div class="h-2 rounded-full bg-primary" style="width: 80%" />
          </div>
        </div>

        <div class="mb-8">
          <div class="mb-2 flex items-center justify-between">
            <h3 class="text-xl font-semibold text-primary">Description</h3>
            <button class="text-primary hover:text-primary-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <h4 class="mb-2 text-lg font-medium text-primary">
            Welcome to the 2023 edition of Kaggle's Playground Series!
          </h4>
          <p class="mb-4 text-muted-foreground">
            Thank you to everyone who participated in and contributed to Season
            3 Playground Series so far!
          </p>
          <p class="mb-4 text-muted-foreground">
            With the same goal to give the Kaggle community a variety of fairly
            light-weight challenges that can be used to learn and sharpen skills
            in different aspects of machine learning and data science, we will
            continue launching the Tabular Tuesday in August every Tuesday 00:00
            UTC, with each competition running for 3 weeks. Again, these will be
            fairly light-weight datasets that are synthetically generated from
            real-world data, and will provide an opportunity to quickly iterate
            through various model and feature engineering ideas, create
            visualizations, etc.
          </p>
          <h4 class="mb-2 text-lg font-medium text-primary">
            Synthetically-Generated Datasets
          </h4>
          <p class="text-muted-foreground">
            Using synthetic data for Playground competitions allows us to strike
            a balance between having real-world data (with named features) and
            ensuring test labels are not publicly available. This allows us to
            host competitions with more interesting datasets than in the past.
            While there are still challenges with synthetic data generation, the
            state-of-the-art is much better now than when we started the Tabular
            Playground Series two years ago, and that goal is to produce
            datasets that have far fewer artifacts. Please feel free to give us
            feedback on the datasets for the different competitions so that we
            can continue to improve!
          </p>
        </div>
      </div>

      <div class="lg:w-1/3">
        <div class="mb-6 rounded-lg bg-card p-6">
          <h3 class="mb-2 text-lg font-semibold text-primary">
            Competition Host
          </h3>
          <div class="flex items-center">
            <img
              src="https://v0.dev/placeholder.svg?height=40&width=40"
              alt="Kaggle logo"
              class="mr-3 h-10 w-10 rounded-full"
            />
            <span class="text-card-foreground">Kaggle</span>
          </div>
        </div>

        <div class="mb-6 rounded-lg bg-card p-6">
          <h3 class="mb-4 text-lg font-semibold text-primary">
            Prizes & Awards
          </h3>
          <p class="mb-2 text-card-foreground">Swag</p>
          <p class="text-muted-foreground">Does not award Points or Medals</p>
        </div>

        <div class="mb-6 rounded-lg bg-card p-6">
          <h3 class="mb-4 text-lg font-semibold text-primary">Participation</h3>
          <p class="mb-1 text-card-foreground">2,768 Entrants</p>
          <p class="mb-1 text-card-foreground">986 Participants</p>
          <p class="mb-1 text-card-foreground">955 Teams</p>
          <p class="text-card-foreground">10,344 Submissions</p>
        </div>

        <div class="mb-6 rounded-lg bg-card p-6">
          <h3 class="mb-4 text-lg font-semibold text-primary">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <span
              class="rounded-full bg-secondary px-2 py-1 text-sm text-secondary-foreground"
              >Beginner</span
            >
            <span
              class="rounded-full bg-secondary px-2 py-1 text-sm text-secondary-foreground"
              >Tabular</span
            >
            <span
              class="rounded-full bg-secondary px-2 py-1 text-sm text-secondary-foreground"
              >Data Cleaning</span
            >
            <span
              class="rounded-full bg-secondary px-2 py-1 text-sm text-secondary-foreground"
              >Custom Metric</span
            >
          </div>
        </div>

        <div class="rounded-lg bg-card p-6">
          <h3 class="mb-4 text-lg font-semibold text-primary">
            Table of Contents
          </h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-primary hover:text-primary-foreground"
                >Description</a
              >
            </li>
            <li>
              <a href="#" class="text-primary hover:text-primary-foreground"
                >Evaluation</a
              >
            </li>
            <li>
              <a href="#" class="text-primary hover:text-primary-foreground"
                >Timeline</a
              >
            </li>
            <li>
              <a href="#" class="text-primary hover:text-primary-foreground"
                >Prizes</a
              >
            </li>
            <li>
              <a href="#" class="text-primary hover:text-primary-foreground"
                >Citation</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any necessary imports and component logic here
</script>
