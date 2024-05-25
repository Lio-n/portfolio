<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  const variantStyle =
    variant === 'primary'
      ? `border-2 border-nero px-4 py-2 text-sm font-black text-nero w-fit`
      : 'border-l-4 border-vivid-blue p-2 bg-vivid-blue/20 font-normal';
</script>

<p class={`${variantStyle} ${$$props.class || ''}`}>
  <slot />
</p>
