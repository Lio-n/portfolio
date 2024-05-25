<script lang="ts">
  import Button from '../ui/atoms/button.atom.svelte';
  export let listenCurrentTab: (tab: Tab) => {};

  type Tab = 'ALL' | 'CURRENT WORKS' | 'FRONTEND MENTOR';
  let ActiveTab: Tab = 'ALL';

  const handleChangeTab = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    ActiveTab = target.id as Tab;

    listenCurrentTab(ActiveTab);
  };
</script>

<div class="flex flex-wrap gap-2 items-center text-center {$$props.class}">
  <Button id="ALL" on:click={handleChangeTab} active={ActiveTab === 'ALL'}>ALL</Button>
  <span class="w-[0.4rem] h-[0.4rem] bg-black rounded-full"></span>

  <Button id="CURRENT WORKS" on:click={handleChangeTab} active={ActiveTab === 'CURRENT WORKS'}>CURRENT WORKS</Button>
  <span class="w-[0.4rem] h-[0.4rem] bg-black rounded-full"></span>

  <Button id="FRONTEND MENTOR" on:click={handleChangeTab} active={ActiveTab === 'FRONTEND MENTOR'}
    >FRONTEND MENTOR</Button
  >
</div>
