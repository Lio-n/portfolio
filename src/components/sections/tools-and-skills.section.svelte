<script lang="ts">
  import ManWithNetIllustration from '../../assets/man-with-net.svg';
  import Tab from '../../ui/atoms/tab.atom.svelte';
  import Typography from '../../ui/atoms/typography.atom.svelte';
  import LogosList from '../logosList.component.svelte';
</script>

<section id="#proyects" class="mb-40 p-4 sm:grid sm:grid-cols-[45%,55%] sm:grid-rows-[auto,1fr] relative">
  <div>
    <Tab>TOOLS & SKILLS</Tab>
    <Typography class="my-4" as="Paragraph" text="I have experience with the following..." />
  </div>

  <img
    src={ManWithNetIllustration}
    alt="man-with-net-illustration"
    aria-hidden="true"
    class="md:ml-4 h-80 md:h-full w-full sm:col-start-2 sm:row-start-1 sm:row-end-3"
  />

  <div class="w-fit mx-auto my-0 grid grid-cols-4 place-items-center gap-4 sm:w-full sm:col-start-1 sm:row-start-2">
    <LogosList />
  </div>
</section>
