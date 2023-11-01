<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>ERROR {$page.status} | Tim Heidler</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div>
			<h1 class="text-5xl font-bold">{$page.status} {$page.error.message}</h1>
			{#if $page.status == 404}
				<p class="py-6">The page you were looking for could not be found.</p>
			{:else if $page.status == 500}
				<p class="py-6">The server encountered an internal error.</p>
			{/if}
			<a href="javascript:history.back()" class="btn btn-ghost">Get back</a>
			<span>or go to</span>
			<a href="/" class="btn btn-ghost">Home</a>
		</div>
	</div>
</div>
