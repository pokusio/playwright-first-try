<script>
	export let items;
</script>
<article class="prose prose-slate bg-gray-100">
</article>
{#each items as item}
	<svelte:component class="prose text-black-500" this={item.component} {...item} />
{/each}
