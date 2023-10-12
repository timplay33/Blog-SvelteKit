<script>
	export let data;
	let article = data.articles[0];
	const body = article.body;
	import SvelteMarkdown from 'svelte-markdown';
</script>

<svelte:head>
	<title>Tim Heidler | {article.title}</title>
</svelte:head>

<div class="hero min-h-full py-6 bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img src={article.image} alt={article.imageAlt} class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">{article.title}</h1>
			<p class="py-6">{article.description}</p>
			<p>
				by <span class="text-primary-content">{article.author}</span> on
				<span class="text-primary-content">{article.created_at}</span>
			</p>
		</div>
	</div>
</div>
<div class="flex justify-center">
	<div id="markdown" class="w-4/5 pt-6">
		<SvelteMarkdown source={body} />
	</div>
</div>
