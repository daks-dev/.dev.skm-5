<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { DEV } from 'esm-env';
  import { onMount } from 'svelte';
  import { Head, Icon, SvelteKitCounter } from '@daks.dev/svelte.sdk';
  import { admindata } from '@daks.dev/svelte.sdk/stores';

  import type { PageData } from './$types';
  export let data: PageData;
  const { version } = data;

  let waiting = false;
  let done = $admindata;
  // TODO:
  waiting = waiting;
  done = done;

  const robots = 'noindex, follow';
  const title = 'СКМ • Admin';

  onMount(() => ($admindata = done));
</script>

<Head
  {robots}
  {title} />

<main>
  <header class="frame mb-4 flex items-center gap-8">
    {#if DEV}
      <h1 class="title grow">Admin</h1>
    {:else}
      <div class=" grow">
        <h1 class="title mb-4">SvelteKit</h1>
        <h4 class="font-semibold text-gray-400">tailwindcss</h4>
      </div>
    {/if}
    <a
      rel="noreferrer nofollow"
      class="
        relative
        w-24 drop-shadow-md transition duration-300 ease-in-out
        hover:scale-105 hover:drop-shadow-lg sm:w-32"
      href="https://github.com/daks-dev/.dev.skm"
      target="_blank">
      <img
        class="h-auto w-full"
        src="/assets/icons/github.svg"
        alt="GitHUB"
        decoding="async"
        loading="lazy" />
      <b
        class="
          absolute top-4 left-1/2 -translate-x-1/2 pr-0.5
          text-xs text-slate-400">
        {version}
      </b>
    </a>
  </header>

  {#if DEV}
    <div class="frame flex">
      <div class="flex flex-col gap-8 border-r-2 pr-8 text-2xl">
        <a
          class={twMerge('button max-w-full rounded border', waiting && 'disabled')}
          href="/admin/iconify">
          Iconify
        </a>
      </div>
      <div class="flex grow gap-8">
        {#if waiting}
          <Icon
            icon="svg-spinners:180-ring-with-bg"
            class="mx-auto h-20 w-20 self-center" />
        {:else if done}
          {#each Object.keys(done) as key}
            <div class="flex flex-col">
              <b class="font-mono text-xl text-slate-500">{key}</b>
              {#each done[key] as el}
                <span>{el}</span>
              {/each}
            </div>
          {/each}
        {:else}
          <Icon
            icon="ic:round-close"
            class="mx-auto h-20 w-20 self-center text-gray-300" />
        {/if}
      </div>
    </div>
  {:else}
    <SvelteKitCounter class="frame items-center" />
  {/if}
</main>
