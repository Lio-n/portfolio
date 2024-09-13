<script lang="ts">
  import ManWithNetIllustration from '../../assets/man-with-net.svg';
  import Tab from '../../ui/atoms/tab.atom.svelte';
  import Typography from '../../ui/atoms/typography.atom.svelte';
  import LogosList from '../logosList.component.svelte';
</script>

<section
  id="tools-&-skills"
  class="mb-40 p-4 sm:grid sm:grid-cols-[40%,40%] sm:place-content-center sm:grid-rows-[auto,1fr] relative sm:justify-evenly"
>
  <div>
    <Tab>TOOLS & SKILLS</Tab>
    <Typography class="my-4" as="Paragraph" text="I have experience with the following..." />
  </div>

  <img
    src={ManWithNetIllustration}
    alt="man-with-net-illustration"
    aria-hidden="true"
    class="object-contain h-80 w-fit md:h-full sm:col-start-2 sm:row-start-1 sm:row-end-3 mx-auto my-0"
  />

  <div
    class="w-fit mx-auto my-0 grid grid-cols-5 place-items-center gap-4 sm:gap-4 sm:w-full sm:col-start-1 sm:row-start-2"
  >
    <LogosList />
  </div>
</section>
