<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Async, CarouselKit } from '@daks.dev/svelte.sdk';
  import Infographic from './Infographic.svelte';

  import '@daks.dev/svelte.sdk/styles/content.css';

  import { screens } from '$lib/assets/images/gallery/index.async';
  const getter = async () => ({
    dataset: await screens()
  });

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { infographic } = data;

  const show = (x: number) =>
    (x < 640 && 1) || (x < 768 && 2) || (x < 1024 && 3) || (x < 1280 && 4) || 5;

  const title = 'СКМ • Деятельность';
  const description = 'Направления деятельности предпрятия СКМ';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="mb-0 min-h-screen justify-between"
  itemprop="mainContentOfPage">
  <header class="frame mb-0">
    <h1 class="title">Направления деятельности</h1>
  </header>

  <Infographic {infographic} />

  <Async
    let:value
    {getter}>
    <CarouselKit
      class="xs:block hidden"
      {...value}
      {show}
      duration={15000}
      controls="play"
      progress
      stream
      check />
  </Async>
</main>
