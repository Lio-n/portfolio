<script lang="ts" context="module">
  export type TabVariant = 'JOBS' | 'PROYECTS' | 'FRONTEND MENTOR';
</script>

<script lang="ts">
  import Button from '../ui/atoms/button.atom.svelte';
  export let listenCurrentTab: (tab: TabVariant) => void;

  let ActiveTab: TabVariant = 'JOBS';

  const handleChangeTab = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    ActiveTab = target.id as TabVariant;

    listenCurrentTab(ActiveTab);
  };
</script>

<div class="flex flex-wrap gap-2 items-center text-center {$$props.class}">
  <Button id="JOBS" on:click={handleChangeTab} active={ActiveTab === 'JOBS'}>JOBS</Button>
  <span class="w-[0.4rem] h-[0.4rem] bg-black rounded-full"></span>

  <Button id="PROYECTS" on:click={handleChangeTab} active={ActiveTab === 'PROYECTS'}>PROYECTS</Button>
  <span class="w-[0.4rem] h-[0.4rem] bg-black rounded-full"></span>

  <Button id="FRONTEND MENTOR" on:click={handleChangeTab} active={ActiveTab === 'FRONTEND MENTOR'}
    >FRONTEND MENTOR</Button
  >
</div>
