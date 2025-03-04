<script lang="ts">
  import { YandexMetrikaHit, GalleryKit } from '@daks.dev/svelte.sdk';

  import { sources as dataset } from '$lib/content/partners';

  const title = 'СКМ • Партнёры';
  const description = 'Партнёры предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="wrapper-lg">
    <h1 class="title">Наши партнеры</h1>
  </header>

  <GalleryKit
    class="wrapper-lg gap-x-8 gap-y-12 lg:grid-cols-2"
    custom={{
      caption: 'text-lg text-slate-600 dark:text-slate-400'
    }}
    {dataset}
    grid
    centered
    scale
    shadow />
</main>
