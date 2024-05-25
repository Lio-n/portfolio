<script context="module" lang="ts">
  import CloseIcon from '../../assets/x-circle-fill.svg';
  import Tab from '../atoms/tab.atom.svelte';
  export type Work = {
    title: string;
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
    <img
      src={item.image_url}
      alt="Website Live - {item.title}"
      class="md:rounded-tl-lg md:rounded-tr-lg max-h-60 w-full object-cover"
    />
    <button on:click class="absolute top-4 right-4">
      <img src={CloseIcon} alt="Close Button" class="size-8 shadow-md shadow-white rounded-full" />
    </button>
  </div>
  <div
    class="size-full pt-8 px-4 pb-72 md:p-4 rounded-br-lg rounded-bl-lg border-x border-b border-slate-500 bg-white overflow-y-auto"
  >
    <Typography as="Heading" text={item.title} />
    <Typography as="Paragraph" text={item.description} />
    <Typography as="Heading" text="Build with" class="mt-4 mb-2" />
    <div class="flex flex-wrap gap-2">
      {#each item.stack as stack}
        <Tab variant="secondary">{stack}</Tab>
      {/each}
    </div>
  </div>
</div>
