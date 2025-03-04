<script lang="ts">
  import { YandexMetrikaHit, CardPlaceholder, TestimonialPlaceholder } from '@daks.dev/svelte.sdk';

  const title = 'СКМ • Отзывы';
  const description = 'Отзывы о предприятии СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="wrapper-lg">
    <h1 class="title">Отзывы</h1>
  </header>

  <div
    class="
      wrapper-lg mb-16
      flex flex-wrap justify-around gap-y-8">
    {#each Array(5) as _val}
      <CardPlaceholder
        class="
          w-full max-w-sm
          snap-start odd:bg-green-700/20
          even:bg-red-700/20" />
    {/each}
  </div>
  <TestimonialPlaceholder class="wrapper-lg max-w-xl" />
</main>
