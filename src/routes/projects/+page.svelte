<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import { sources, squares as thumbnails } from '$lib/assets/images/gallery';

  const title = 'СКМ • Проекты';
  const description = 'Проекты предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <LightboxKit
    class="frame gap-x-8 gap-y-8"
    custom={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {sources}
    {thumbnails}
    sign
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
