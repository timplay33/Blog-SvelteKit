<script>
	import { CreateUrl, FormatDate } from '$lib';
	export let data;
	data = data.data
</script>

<svelte:head>
	<title>Blog | Tim Heidler</title>
	<meta name="description" content="here are all my blog posts!" />
</svelte:head>

<div class="text-center py-6">
	<div>
		<h2 class="text-3xl font-bold">Articles</h2>
	</div>

	<div class="flex flex-row flex-wrap justify-center">
		{#each data.posts as post}
			<div class="carousel-item m-5">
				<a href="{CreateUrl(post)}">
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure>
							<img
								src={post.feature_image}
								alt="feature_image"
								class="w-full h-52 object-cover"
								loading="lazy"
							/>
						</figure>
						<div class="card-body">
							<div class="h-40 overflow-hidden">
								<h2 class="card-title">{post.title}</h2>
								<p class="h-3" />
								<p>
									by <span class="text-accent">Tim Heidler</span> on
									<span class="text-accent">{FormatDate(post.published_at)}</span>
								</p>
								<p class="h-3" />
								<p>{post.excerpt}</p>
							</div>
							<div class="card-actions justify-end">
								<a href="{CreateUrl(post)}" class="btn btn-primary">Continue Reading</a>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>
