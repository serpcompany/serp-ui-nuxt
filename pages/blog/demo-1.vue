<template>
  <section>
    <div
      class="flex w-full flex-col items-center pb-8 pt-4 md:flex-row md:pb-10 md:pt-8 lg:pb-16"
    >
      <aside
        class="top-20 mb-8 w-full self-start pt-8 md:sticky md:mr-8 md:w-fit md:min-w-64 md:flex-1 lg:mr-32 lg:max-w-72 lg:shrink-0 2xl:w-full"
      >
        <div class="mb-8 flex w-full max-w-fit shrink-0 flex-col md:mb-10">
          <div class="hidden w-full md:mt-1 md:block">
            <div class="flex w-full items-center space-x-6">
              <a href="#" class="hover:-translate-y-0.5">
                <img
                  src="https://www.shadcnblocks.com/images/block/logos/instagram-icon.svg"
                  alt="Instagram"
                  class="size-5 text-muted-foreground"
                />
              </a>
              <a href="#" class="hover:-translate-y-0.5">
                <img
                  src="https://www.shadcnblocks.com/images/block/logos/linkedin-icon.svg"
                  alt="LinkedIn"
                  class="size-5 text-muted-foreground"
                />
              </a>
              <a href="#" class="hover:-translate-y-0.5">
                <img
                  src="https://www.shadcnblocks.com/images/block/logos/producthunt-icon.svg"
                  alt="Product Hunt"
                  class="size-5 text-muted-foreground"
                />
              </a>
              <a href="#" class="hover:-translate-y-0.5">
                <img
                  src="https://www.shadcnblocks.com/images/block/logos/twitter-icon.svg"
                  alt="Twitter"
                  class="size-5 text-muted-foreground"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col rounded-xl border border-border bg-accent py-6 md:py-8"
        >
          <div class="md:mb-4.5 mb-6 px-6 font-medium leading-5">
            About Case Study
          </div>
          <div class="mb-5 px-6 last:mb-0">
            <div class="mb-2 text-xs font-semibold">Company</div>
            <div
              class="overflow-hidden text-xs text-muted-foreground md:text-sm"
            >
              Suspendisse vel euismod sem. Sed sollicitudin augue eu facilisis
              scelerisque. Nullam pharetra tortor ut massa accumsan egestas.
            </div>
          </div>
          <div class="mb-5 px-6 last:mb-0">
            <div class="mb-2 text-xs font-semibold">Industry</div>
            <div
              class="overflow-hidden text-xs text-muted-foreground md:text-sm"
            >
              Suspendisse volutpat
            </div>
          </div>
          <div class="mb-5 border-t border-border px-6 pt-5 last:mb-0">
            <div class="mb-2 text-xs font-semibold">Location</div>
            <div
              class="overflow-hidden text-xs text-muted-foreground md:text-sm"
            >
              London, United Kingdom
            </div>
          </div>
          <div class="mb-5 px-6 last:mb-0">
            <div class="mb-2 text-xs font-semibold">Company size</div>
            <div
              class="overflow-hidden text-xs text-muted-foreground md:text-sm"
            >
              11-50
            </div>
          </div>
          <div class="mb-5 px-6 last:mb-0">
            <div class="mb-2 text-xs font-semibold">Website</div>
            <div
              class="overflow-hidden text-xs text-muted-foreground md:text-sm"
            >
              <a href="#" class="underline hover:text-foreground">
                https://example.com/
              </a>
            </div>
          </div>
          <div class="mb-5 px-6 last:mb-0">
            <div class="mb-2 text-xs font-semibold">Topics</div>
            <div
              class="overflow-hidden text-xs text-muted-foreground md:text-sm"
            >
              Sed sollicitudin augue eu facilisis scelerisque
            </div>
          </div>
        </div>
      </aside>
      <article class="prose prose-sm mx-auto pt-8" v-html="articleContent" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const articleContent = ref(`
  <h1>The Joke Tax Chronicles</h1>
  <p>
    Once upon a time, in a far-off land, there was a very lazy king who
    spent all day lounging on his throne. One day, his advisors came to
    him with a problem: the kingdom was running out of money.
  </p>
  <h2>The King's Plan</h2>
  <p>
    The king thought long and hard, and finally came up with
    <a href="#">a brilliant plan</a>: he would tax the jokes in the
    kingdom.
  </p>
  <blockquote>
    "After all," he said, "everyone enjoys a good
    joke, so it's only fair that they should pay for the
    privilege."
  </blockquote>
  <h3>The Joke Tax</h3>
  <p>
    The king's subjects were not amused. They grumbled and
    complained, but the king was firm:
  </p>
  <ul>
    <li>1st level of puns: 5 gold coins</li>
    <li>2nd level of jokes: 10 gold coins</li>
    <li>3rd level of one-liners : 20 gold coins</li>
  </ul>
  <p>
    As a result, people stopped telling jokes, and the kingdom fell into
    a gloom. But there was one person who refused to let the king's
    foolishness get him down: a court jester named Jokester.
  </p>
  <h3>Jokester's Revolt</h3>
  <p>
    Jokester began sneaking into the castle in the middle of the night
    and leaving jokes all over the place: under the king's pillow,
    in his soup, even in the royal toilet. The king was furious, but he
    couldn't seem to stop Jokester.
  </p>
  <p>
    And then, one day, the people of the kingdom discovered that the
    jokes left by Jokester were so funny that they couldn't help
    but laugh. And once they started laughing, they couldn't stop.
  </p>
  <h3>The People's Rebellion</h3>
  <p>
    The people of the kingdom, feeling uplifted by the laughter, started
    to tell jokes and puns again, and soon the entire kingdom was in on
    the joke.
  </p>
  <div>
    <table>
      <thead>
        <tr>
          <th>King's Treasury</th>
          <th>People's happiness</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Empty</td>
          <td>Overflowing</td>
        </tr>
        <tr class="p-0 m-0 border-t even:bg-muted">
          <td>Modest</td>
          <td>Satisfied</td>
        </tr>
        <tr class="p-0 m-0 border-t even:bg-muted">
          <td>Full</td>
          <td>Ecstatic</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    The king, seeing how much happier his subjects were, realized the
    error of his ways and repealed the joke tax. Jokester was declared a
    hero, and the kingdom lived happily ever after.
  </p>
  <p>
    The moral of the story is: never underestimate the power of a good
    laugh and always be careful of bad ideas.
  </p>
`);
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
