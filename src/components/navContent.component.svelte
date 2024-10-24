<script lang="ts">
  import Typography from '../ui/atoms/typography.atom.svelte';

  const CustomStyleText = 'w-fit underline-offset-8 decoration-2 decoration-dotted decoration-nero';
</script>

<div class={`flex flex-col gap-4 px-4 py-8 ${$$props.class || ''}`}>
  <a href="/#jobs-&-proyects">
    <Typography as="Paragraph" text="Jobs & Proyects" class={CustomStyleText} />
  </a>

  <a href="/#tools-&-skills">
    <Typography as="Paragraph" text="Tools & Skills" class={CustomStyleText} />
  </a>

  <a href="/Leonardo Fontan - Oct 2024.pdf" download="Leonardo Fontan - Oct 2024.pdf">
    <Typography as="Paragraph" text="Download CV" class={CustomStyleText} />
  </a>
</div>

<style>
  a {
    display: block;
    position: relative;
    padding: 0.2em 0;
    overflow: hidden;
  }
  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.15em;
    background-color: #3b82f6;
    opacity: 0;
    transition:
      opacity 300ms,
      transform 300ms;
  }

  a::after {
    transform: translate3d(-100%, 0, 0);
  }
  a:hover::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
</style>
