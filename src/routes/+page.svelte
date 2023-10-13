<script>
	export let data;
</script>

<svelte:head>
	<title>Tim Heidler | Home</title>
	<meta
		name="description"
		content="This is my blog! I use this space to document my adventures in development, sharing how I’ve overcome issues
	I’ve run into, useful resources, and more."
	/>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img src="../hero.png" alt="" class="max-w-sm rounded-lg shadow-2xl" />
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
					<a href="blog/{post.slug}">
						<div class="card w-96 bg-base-100 shadow-xl">
							<figure>
								<img
									src={post.image}
									alt={post.imageAlt}
									class="w-full h-52 object-cover"
									loading="lazy"
								/>
							</figure>
							<div class="card-body">
								<div class="h-40 overflow-hidden">
									<h2 class="card-title">{post.title}</h2>
									<p class="h-3" />
									<p>
										by <span class="text-primary-content">{post.author}</span> on
										<span class="text-primary-content">{post.created_at}</span>
									</p>
									<p class="h-3" />
									<p>{post.description}</p>
								</div>
								<div class="card-actions justify-end">
									<a href="blog/{post.slug}" class="btn btn-primary">Continue Reading</a>
								</div>
							</div>
						</div>
					</a>
				</div>
			{/if}
		{/each}
	</div>
</div>
