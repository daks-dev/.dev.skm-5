<script lang="ts">
  import { onMount } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  export let infographic: Partial<Infographic>[];

  let className: ClassName = undefined;
  export { className as class };

  onMount(() => {
    let delay = 0;
    infographic.forEach((info) => info.max && (delay = info.max > delay ? info.max : delay));
    delay = delay * 10;
    (infographic as Infographic[]).forEach((info, idx) => {
      //const data = <Infographic>info;
      if (info.max) {
        info.count ??= 0;
        setTimeout(
          () => {
            const inteval = setInterval(() => {
              if (info.count < info.max) infographic[idx].count = ++info.count;
              // if (info.node) info.node.style.opacity = .5 + info.count / info.max / 2;
              else {
                if (info.node) info.node.style.opacity = '';
                clearInterval(inteval);
              }
            }, delay / info.max);
          },
          750 + 250 * idx
        );
      }
    });
  });
</script>

<div class={twMerge('my-auto py-4', 'flex flex-wrap justify-around gap-8', className)}>
  {#each infographic as info}
    <figure class="flex flex-col items-center gap-4">
      <img
        bind:this={info.node}
        class="
          rounded-lg bg-slate-600
          p-7 dark:bg-transparent"
        style:opacity=".25"
        src={info.icon?.src}
        width={info.icon?.width}
        height={info.icon?.height}
        alt={info.title?.toLowerCase()}
        decoding="sync"
        loading="eager" />
      <figcaption class="flex flex-col items-center gap-2">
        <span
          class="
            text-4xl font-bold
            text-gray-500 dark:text-slate-300">
          {@html info.count || '&mdash;'}
        </span>
        <span
          class="
            text-lg text-slate-600
            md:text-xl dark:text-slate-300">
          {info.title}
        </span>
      </figcaption>
    </figure>
  {/each}
</div>
