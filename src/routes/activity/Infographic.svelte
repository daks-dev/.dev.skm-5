<script lang="ts">
  import { Lightbox, Sign } from '@daks.dev/svelte.sdk';

  export let infographic: Partial<Infographic>[];
</script>

<div
  class="wrapper-lg grid
        grid-cols-none gap-x-4 gap-y-10 py-8
        text-center sm:grid-cols-2 lg:grid-cols-3">
  {#each infographic as info}
    <Lightbox
      class="group relative"
      custom={{ overlay: 'overflow-offset' }}
      scrollable={true}>
      <svelte:fragment slot="thumbnail">
        <Sign
          class="top-2 left-1/2 -ml-[72px]"
          icon="ic:round-zoom-out-map"
          small />
        <figure class="flex flex-col items-center gap-2">
          <img
            class="
              rounded-lg bg-slate-600
              p-5 drop-shadow-lg
              transition duration-300 ease-in-out
              hover:scale-105 hover:drop-shadow-xl dark:bg-transparent"
            src={info.icon?.src}
            width={info.icon?.width}
            height={info.icon?.height}
            alt={info.title}
            loading="eager" />
          <figcaption class="text-xl text-gray-500 dark:text-slate-400">
            {info.title}
          </figcaption>
        </figure>
      </svelte:fragment>
      <div class="max-w-5xl rounded-sm bg-white text-black">
        <div class="content px-10 pt-5 pb-7 text-justify leading-relaxed">
          <h3 class="title mb-5">{info.title}</h3>
          {@html info.content}
        </div>
      </div>
    </Lightbox>
  {/each}
</div>
