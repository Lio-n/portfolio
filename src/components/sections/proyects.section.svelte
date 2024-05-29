<script lang="ts">
  import TelescopeIllustration from '../../assets/telescope.svg';
  import StarIcon from '../../assets/star.svg';
  import Tab from '../../ui/atoms/tab.atom.svelte';
  import Tabs, { type TabVariant } from '../tabs.component.svelte';
  import WorkJson from '../../data/works.json';
  import type { Work } from '../../ui/molecules/card.molecule.svelte';
  import Card from '../../ui/molecules/card.molecule.svelte';
  import CardThumbnailList from '../cardThumbnailList.component.svelte';
  import Pagination from '../pagination.component.svelte';

  let currentTab: TabVariant = 'ALL';
  let currentWork: Work | null;

  const handleSelectedCard = (id: string | number | null) => {
    currentWork = id !== null ? WorkJson[currentTab][id as number] : (id as null);
  };

  let perPage = 4;
  $: totalItems = WorkJson[currentTab].length;
  $: totalPages = Math.ceil(totalItems / perPage);
  $: currentPage = 0;
  $: start = currentPage * perPage;
  $: end = start + perPage;
  $: sharp = WorkJson[currentTab].slice(start, end);

  const onChange = (i: number) => (currentPage = i - 1);
  const listenCurrentTab = (tab: TabVariant) => {
    currentTab = tab;
    start = 0;
    end = start + perPage;
    sharp = WorkJson[currentTab].slice(start, end);
  };
</script>

<section id="#proyects" class="mb-40 p-4 md:h-[428px] md:grid md:grid-cols-[40%,60%] md:grid-rows-[auto,1fr] relative">
  <Tab>PROYECTS</Tab>

  <div class="relative md:row-start-1 md:row-end-3 md:self-end">
    <img src={StarIcon} alt="Star icon" aria-hidden="true" class="hidden md:block absolute top-[-3rem] left-[5rem]" />
    <img
      src={StarIcon}
      alt="Star icon"
      aria-hidden="true"
      class="hidden md:block absolute top-[1rem] right-[-6rem] z-[-1]"
    />
    <img src={TelescopeIllustration} alt="telescope-illustration" aria-hidden="true" class="h-80 w-full" />
  </div>

  <div>
    <Tabs class="my-6" {listenCurrentTab} />

    <div class="text-nero">
      <CardThumbnailList listenClick={handleSelectedCard} works={sharp} />

      {#if currentWork}
        <div class="fixed top-0 left-0 size-full md:absolute md:grid md:w-[38%]">
          <Card item={currentWork} on:click={() => handleSelectedCard(null)} class="md:max-h-60" />
        </div>
      {/if}

      {#if totalPages > 1}
        <div class="mt-8 flex justify-end absolute right-0">
          <Pagination pageCount={totalPages} {onChange} />
        </div>
      {/if}
    </div>
  </div>
</section>
