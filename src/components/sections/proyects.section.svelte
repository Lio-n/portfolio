<script lang="ts">
  import TelescopeIllustration from '../../assets/telescope.svg';
  import StarIcon from '../../assets/star.svg';
  import Tab from '../../ui/atoms/tab.atom.svelte';
  import Tabs from '../tabs.component.svelte';
  import WorkJson from '../../data/works.json';
  import type { Work } from '../../ui/molecules/card.molecule.svelte';
  import Card from '../../ui/molecules/card.molecule.svelte';
  import CardThumbnailList from '../cardThumbnailList.component.svelte';

  let currentTab: 'ALL' | 'CURRENT WORKS' | 'FRONTEND MENTOR' = 'ALL';
  let currentWork: Work | null;

  const handleSelectedCard = (id: string | number | null) => {
    console.log(id, currentWork);

    if (id !== null) {
      currentWork = WorkJson[currentTab][id as number];
    } else {
      currentWork = id as null;
    }
  };
</script>

<section id="#proyects" class="mb-40 p-4 md:grid md:grid-cols-[40%,60%] md:grid-rows-[2rem,1fr] relative">
  <Tab>PROYECTS</Tab>

  <div class="relative md:row-start-1 md:row-end-3">
    <img src={StarIcon} alt="Star icon" aria-hidden="true" class="hidden md:block absolute top-[-3rem] left-[5rem]" />
    <img
      src={StarIcon}
      alt="Star icon"
      aria-hidden="true"
      class="hidden md:block absolute top-[5rem] right-[-6rem] z-[-1]"
    />
    <img src={TelescopeIllustration} alt="telescope-illustration" aria-hidden="true" class="h-80 w-full" />
  </div>

  <div>
    <Tabs class="my-6" listenCurrentTab={(tab) => (currentTab = tab)} />

    <div class="text-nero">
      <CardThumbnailList listenClick={handleSelectedCard} works={WorkJson[currentTab]} />

      {#if currentWork}
        <div class="fixed top-0 left-0 size-full md:absolute md:grid md:w-[38%]">
          <Card item={currentWork} on:click={() => handleSelectedCard(null)} class="md:max-h-60" />
        </div>
      {/if}

      <div class="mt-8 flex gap-4 justify-end">
        <div class="size-8 bg-nero rounded-full"></div>
        <div class="size-8 bg-nero rounded-full"></div>
      </div>
    </div>
  </div>
</section>
