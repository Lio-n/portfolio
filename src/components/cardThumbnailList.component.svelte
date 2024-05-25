<script lang="ts">
  import CardThumbnail from '../ui/molecules/cardThumbnail.molecule.svelte';
  import type { Work } from '../ui/molecules/card.molecule.svelte';

  export let listenClick: (id: string | number) => void = () => {};
  export let works: Work[];
</script>

<ul class="flex flex-wrap gap-4">
  {#each works as { title, repository_url, site_url, image_url }, key}
    <li id={key.toString()} class="w-full max-w-[calc(50%-.5rem)]">
      <CardThumbnail
        {listenClick}
        item={{ title, repository_url, site_url, image_url, id: key }}
        class="max-h-32 bg-violet-500"
      />
    </li>
  {/each}
</ul>
