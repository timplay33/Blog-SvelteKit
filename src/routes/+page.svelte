<script>
	import { CreateUrl, FormatDate } from '$lib';
	export let data;
	data = data.data

	let post = data.posts[0]
</script>

<svelte:head>
	<title>Home | Tim Heidler</title>
	<meta
		name="description"
		content="This is my blog! I use this space to document my adventures in development, sharing how I’ve overcome issues
	I’ve run into, useful resources, and more."
	/>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div id="post"> 
			<h3 class="text-3xl">Latest post</h3>
			<div class="carousel-item m-5">
				<a href="{CreateUrl(post)}">
					<div class="card w-72 bg-base-100 shadow-xl">
						<figure>
							<img
								src={post.feature_image}
								alt="feature_image"
								class="w-full h-40 object-cover"
							/>
						</figure>
						<div class="card-body">
								<h2 class="card-title">{post.title}</h2>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div>
			<h1 class="text-5xl font-bold">Welcome to my blog!</h1>
			<p class="py-6">
				I use this space to document my adventures in development, sharing how I’ve overcome issues
				I’ve run into, useful resources, and more.
			</p>
			<p class="py-6">
				Below are some of my favourite articles, or you can go to the blog page to see my most
				recent posts.
			</p>
			<a href="#featured-articles" class="btn btn-primary">Featured articles</a>
			<a href="./blog" class="btn btn-neutral">Most recent articles</a>
		</div>
	</div>
</div>

<div class="text-center py-6">
	<div>
		<h2 id="featured-articles" class="text-3xl font-bold">Featured articles</h2>
		<p class="py-6">
			Here is a sample of articles which I feel give you a good idea of what this site is all about.
		</p>
	</div>

	<div class="flex flex-row flex-wrap justify-center">
		{#each data.posts as post}
			{#if post.featured}
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
			{/if}
		{/each}
	</div>
</div>
