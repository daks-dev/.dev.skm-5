<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import '@daks.dev/svelte.sdk/styles/content.css';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { image } = data;

  const title = 'СКМ • О предприятии';
  const description = 'О предприятии СКМ';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow"
  itemprop="mainContentOfPage">
  <header class="frame mb-0">
    <h1 class="title">О предприятии</h1>
  </header>

  <div
    class="
      frame my-auto flex
      flex-wrap gap-8 py-8 lg:flex-nowrap">
    <div class="frame bp:text-lg/relaxed flex-auto leading-relaxed">
      <h2>Строительная компания «МАСШТАБ»</h2>
      <p>
        Строительная компания «Масштаб» является достаточно молодой и перспективной организацией,
        занимающейся контролем за соблюдением технологических процессов строительного производства,
        включающих в себя входной контроль качества строительных материалов и продукции поступающей
        на строительную площадку, оценку технического состояния зданий и сооружений, мониторинг
        объектов нового строительства и окружающей застройки попадающей в геотехническую зону
        влияния.
      </p>
      <p>
        Сотрудниками Строительной компании «Масштаб» являются <b
          >высококвалифицированные специалисты</b>
        с <b>высшим строительным образованием</b>, а так же <b>судебно-технические эксперты</b>.
      </p>
    </div>

    <img
      class="
        bg--loading bg-20% mx-auto
        mt-3 flex-initial bg-neutral-300 bg-center bg-no-repeat"
      src={image.thumbnail.src}
      width={image.thumbnail.width}
      height={image.thumbnail.height}
      alt="skm: thumbnail"
      loading="eager"
      itemprop="thumbnailURL" />
    <link
      href={image.source.src}
      rel="image"
      itemprop="image" />
  </div>
</main>
