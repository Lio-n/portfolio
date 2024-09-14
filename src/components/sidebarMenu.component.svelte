<script lang="ts">
  import CombinedShapeIcon from '../assets/icons/combined-shape.svg';
  import ArrowCircleIcon from '../assets/icons/arrow-circle-fill.svg';
  import NavContent from './navContent.component.svelte';

  let displayMenu = false;

  const showSideMenu = () => (displayMenu = !displayMenu);
</script>

<div>
  <img
    src={CombinedShapeIcon}
    alt="menu-icon"
    aria-hidden="true"
    on:click={showSideMenu}
    class="md:hidden cursor-pointer py-2"
  />

  {#if displayMenu}
    <div class="bg-white left-0 top-0 bottom-0 h-screen shadow md:hidden fixed z-10">
      <img
        src={ArrowCircleIcon}
        class="shadow w-8 absolute right-[-15px] top-4 rounded-full cursor-pointer"
        alt="arrow-circle-icon"
        aria-hidden="true"
        on:click={showSideMenu}
      />

      <NavContent />
    </div>
  {/if}
</div>
