<script lang="ts">
  export let pageCount = 4; // Total pages.
  export let onChange: (page: number) => void;
  $: currentPage = 1;

  const handlePageChange = (page: number) => {
    if (page !== 0 && page <= pageCount) {
      currentPage = page;
      onChange(currentPage);
    }
  };
</script>

<div class="flex gap-4 text-nero">
  <div class="flex gap-2">
    {#each Array(pageCount).fill(null) as _, i}
      <button
        class="rounded-full flex items-center justify-center px-3 h-8 leading-tight {i + 1 === currentPage
          ? 'text-white bg-vivid-blue/40 border border-vivid-blue/50 hover:bg-vivid-blue/50'
          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-vivid-blue'}"
        on:click={() => handlePageChange(i + 1)}>{i + 1}</button
      >
    {/each}
  </div>
</div>
<!-- <button
    on:click={() => handlePageChange(currentPage - 1)}
    aria-label="left arrow icon"
    aria-describedby="Pagination button prev">Prev</button
  > -->
