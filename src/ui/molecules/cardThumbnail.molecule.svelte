<script lang="ts">
  import Typography from '../atoms/typography.atom.svelte';
  import type { Work } from './card.molecule.svelte';
  export let item: Pick<Work, 'image_url' | 'repository_url' | 'site_url' | 'title'> & { id: string | number };
  export let listenClick: (id: string | number) => void = () => {};
</script>

<div class="rounded-lg w-full h-40 relative {$$props.class}">
  <img src={item.image_url} alt="Website Live - {item.title}" class="rounded-lg size-full object-cover" />

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span
    on:click={() => listenClick(item.id)}
    class="absolute w-full h-full top-0 grid place-content-center opacity-0 hover:opacity-100 cursor-pointer"
  >
    <svg
      class="size-8 eye-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#fff"
      viewBox="0 0 16 16"
    >
      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
    </svg>
  </span>

  <div class="absolute bottom-[-.25rem] right-[-.25rem] flex divide-x hover:divide-vivid-blue">
    <a href={item.repository_url} target="_blank" class="bg-nero p-2 md:px-4 rounded-tl-lg hover:bg-vivid-blue">
      <Typography as="TinyParagraph" text="Code" class="text-white" />
    </a>
    <a href={item.site_url} target="_blank" class="bg-nero p-2 md:px-4 hover:bg-vivid-blue rounded-br-lg">
      <Typography as="TinyParagraph" text="Live Site" class="text-white" />
    </a>
  </div>
</div>

<style>
  .eye-icon {
    filter: drop-shadow(0px 0px 5px rgba(59, 130, 246));
  }
</style>
