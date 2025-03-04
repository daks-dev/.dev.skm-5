<script lang="ts">
  import { YandexMetrikaHit, YandexSearchForm, YandexSearchSerp } from '@daks.dev/svelte.sdk';

  const robots = 'noindex, follow';
  const title = 'СКМ • Поиск';
  const description = 'Поиск на сайте предпрятия СКМ';
  const canonical = '';
</script>

<YandexMetrikaHit
  {robots}
  {title}
  {description}
  {canonical} />

<main itemprop="mainContentOfPage">
  <header class="wrapper-lg">
    <h1 class="title">Результаты поиска</h1>
  </header>

  <YandexSearchForm
    class="wrapper-lg xs:pr-[44px] mb-8 px-8 sm:pr-[52px] md:pr-[55px] lg:pr-[142px]"
    reload
    reverse />

  <YandexSearchSerp class="wrapper-lg pr-8 lg:pr-4" />
</main>
