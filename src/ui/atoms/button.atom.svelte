<script lang="ts">
  export let active = false;
  export let id = '';

  $: activeStyle = active
    ? 'bg-vivid-blue text-white hover:shadow-vivid-blue/50 hover:shadow-md'
    : 'hover:text-vivid-blue';
</script>

<button on:click {id} class="{activeStyle} transition text-nero text-xs font-black px-4 py-2">
  <slot />
</button>
