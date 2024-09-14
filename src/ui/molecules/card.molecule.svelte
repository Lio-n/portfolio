<script context="module" lang="ts">
  import CloseIcon from '../../assets/icons/x-circle-fill.svg';
  import Tab from '../atoms/tab.atom.svelte';
  export type Work = {
    title: string;
    position: string;
    description: string;
    image_url: string;
    repository_url: string;
    site_url: string;
    stack: string[];
  };
</script>

<script lang="ts">
  import Typography from '../atoms/typography.atom.svelte';
  export let item: Work;
</script>

<div class="size-full {$$props.class}">
  <div class="relative">
    <button on:click class="absolute top-4 right-4">
      <img src={CloseIcon} alt="Close Button" class="size-8 rounded-full" />
    </button>
  </div>
  <div class="size-full pt-8 px-4 pb-72 md:p-4 md:rounded-lg border border-slate-500 bg-white overflow-y-auto">
    <Typography
      as="Heading"
      class="text-xl w-fit bg-cyan-300 rounded-lg px-4 py-2 mb-4 shadow-cyan-300 shadow-sm"
      text={item.position}
    />

    <Typography as="Heading" class="text-2xl mb-4" text={item.title} />
    {#if item.description}
      <Typography as="Paragraph" class="text-sm" text={item.description} />
    {/if}

    <img
      src={item.image_url}
      alt="Website Live - {item.title}"
      class="rounded-lg max-h-40 w-full md:max-h-40 object-cover my-2"
    />

    <Typography as="Heading" text="Build with" class="text-2xl mb-4" />
    <div class="flex flex-wrap gap-2">
      {#each item.stack as stack}
        <Tab variant="secondary">{stack}</Tab>
      {/each}
    </div>
  </div>
</div>
