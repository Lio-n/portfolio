<script>
  import TelescopeIllustration from '../../assets/telescope.svg';
  import Tab from '../../ui/atoms/tab.atom.svelte';
</script>

<section
  id="#proyects"
  class="p-4 h-80 grid grid-rows-[2rem,calc(40%-2rem),60%] md:grid-cols-[40%,60%] md:grid-rows-[2rem,1fr]"
>
  <div class="size-full bg-red-500"></div>
  <div class="size-full bg-blue-500 md:row-start-1 md:row-end-3"></div>
  <div class="size-full bg-green-500"></div>
  <Tab>PROYECTS</Tab>
  <img src={TelescopeIllustration} alt="telescope-illustration" aria-hidden="true" />
</section>
