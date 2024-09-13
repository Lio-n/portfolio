<script>
  import Typography from '../../ui/atoms/typography.atom.svelte';
  import RocketToMoonIllustration from '../../assets/illustrations/rocket-to-moon.svg';
</script>

<section class="p-4 md:grid md:grid-cols-[60%,40%] lg:grid-cols-[70%,30%] lg:gap-4">
  <div class="grid place-content-center">
    <Typography as="Title" class="mb-4 selection:text-red">
      I'm <span class="underline underline-offset-8 decoration-4 decoration-vivid-blue w-fit">Leonardo </span><span
        class="underline underline-offset-8 decoration-4 decoration-vivid-blue w-fit">Fontan</span
      >, Web Developer FullStack.
    </Typography>

    <Typography
      as="Paragraph"
      text="Based on Entre Rios, Argentina, i’m a passionate developer with experience in creating attractive and functional apps."
    />
    <Typography as="Paragraph" text="— on using modern technologies to deliver high quality solutions." />
  </div>

  <div>
    <img
      src={RocketToMoonIllustration}
      alt="rocket-to-moon-illustration"
      class="hidden md:block lg:scale-125 lg:mt-8"
    />
  </div>
</section>
