<script>
	export let data;
	let post = data.posts[0];
	const body = post.body;
	import SvelteMarkdown from 'svelte-markdown';
</script>

<svelte:head>
	<title>{post.title}| Tim Heidler</title>
	<meta name="description" content={post.description} />
</svelte:head>

<div class="hero min-h-full py-6 bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img src={post.image} alt={post.imageAlt} class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">{post.title}</h1>
			<p class="py-6">{post.description}</p>
			<p>
				by <span class="text-primary-content">{post.author}</span> on
				<span class="text-primary-content">{post.created_at}</span>
			</p>
		</div>
	</div>
</div>
<div class="flex justify-center">
	<div id="markdown" class="w-4/5 pt-6">
		<SvelteMarkdown source={body} />
	</div>
</div>
