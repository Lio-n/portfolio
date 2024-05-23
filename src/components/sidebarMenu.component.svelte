<script lang="ts">
  import CombinedShapeIcon from '../assets/combined-shape.svg';
  import ArrowCircleIcon from '../assets/arrow-circle-fill.svg';
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
    class="md:hidden cursor-pointer"
  />

  {#if displayMenu}
    <div class="absolute bg-white left-0 top-0 bottom-0 h-screen shadow md:hidden">
      <img
        src={ArrowCircleIcon}
        class="shadow w-8 absolute right-[-15px] top-8 rounded-full cursor-pointer"
        alt="arrow-circle-icon"
        aria-hidden="true"
        on:click={showSideMenu}
      />

      <NavContent />
    </div>
  {/if}
</div>
