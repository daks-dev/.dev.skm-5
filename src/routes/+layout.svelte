<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    Head,
    Footer,
    NavbarKit,
    RouteTransition,
    ScreenBlock,
    YandexMetrikaInit
  } from '@daks.dev/svelte.sdk';

  import '../app.css';
  import '$iconify';

  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import { app, nav } from '$lib/configs';

  BROWSER && (document.lazyload ??= lazyload());
</script>

<Head {app} />

<RouteTransition
  class="flex grow flex-col"
  mode={1}
  refresh={data.refresh}>
  <slot />
</RouteTransition>

<Footer {...nav.footer} />

<NavbarKit {...nav.navbar} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
