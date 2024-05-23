<script lang="ts">
  import Typography from '../ui/atoms/typography.atom.svelte';

  const CustomStyleText = 'w-fit underline-offset-8 decoration-2 hover:underline decoration-nero';
</script>

<div class={`flex flex-col gap-4 px-4 py-8 ${$$props.class || ''}`}>
  <a href="/#proyects">
    <Typography as="Paragraph" text="Proyects" class={CustomStyleText} />
  </a>

  <a href="/#tools-&-skills">
    <Typography as="Paragraph" text="Tools & Skills" class={CustomStyleText} />
  </a>

  <a href="/#contact">
    <Typography as="Paragraph" text="Contact" class={CustomStyleText} />
  </a>

  <a href="/Leonardo Fontan - Ene 2024.pdf" download="Leonardo Fontan - Ene 2024.pdf">
    <Typography as="Paragraph" text="Download CV" class={CustomStyleText} />
  </a>
</div>
