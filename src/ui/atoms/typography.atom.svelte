<script lang="ts">
  export let as: 'Title' | 'Heading' | 'Paragraph' | 'TinyParagraph' = 'Paragraph';
  export let text = '';

  const styles = {
    Title: 'text-6xl font-medium',
    Heading: 'text-3xl font-medium',
    Paragraph: 'text-lg font-normal',
    TinyParagraph: 'text-sm font-black',
  };
  const TagTypes = { Title: 'h1', Heading: 'h3', Paragraph: 'p', TinyParagraph: 'p' };
</script>

<svelte:element this={TagTypes[as]} class={`text-nero ${styles[as]} ${$$props.class || ''}`}>
  {#if text}
    {text}
  {:else}
    <slot />
  {/if}
</svelte:element>
