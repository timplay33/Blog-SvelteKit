<script>
	export let data;
	let page = data.data.page
</script>

<svelte:head>
	<title>{page.title} | Tim Heidler</title>
	<meta name="description" content={page.excerpt} />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div id="markdown">
			<h1 class="text-5xl font-bold">{page.title}</h1>
			{@html page.html }
		</div>
	</div>
</div>