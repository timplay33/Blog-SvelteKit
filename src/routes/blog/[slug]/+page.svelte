<script>
	export let data;
	let post = data.data.post
	import { FormatDate } from '$lib';
</script>

<svelte:head>
	<title>{post.title} | Tim Heidler</title>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<div class="hero min-h-full py-6 bg-base-200">
	<div class="hero-content flex-col lg:flex-row">
		<img src={post.feature_image} alt="feature_image" class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">{post.title}</h1>
			<p class="py-6">{post.excerpt}</p>
			<p>
				by <span class="text-accent">Tim Heidler</span> on
				<span class="text-accent">{FormatDate(post.published_at)}</span>
			</p>
		</div>
	</div>
</div>
<div class="flex justify-center">
	<div id="markdown" class="w-4/5 py-6">
		{@html post.html }
	</div>
</div>
