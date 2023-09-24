<script>
  export let data;
</script>

<div class="text-center py-6">
  <div>
    <h2 class="text-3xl font-bold">Articles</h2>
  </div>

  <div class="flex flex-row flex-wrap justify-center">
    {#each data.articles as article}
      <div class="carousel-item  m-5">
        <a href="{article.url}">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="{article.image}" alt="{article.imageAlt}" class="w-full h-52 object-cover" loading="lazy"/></figure>
            <div class="card-body">
              <div class="h-40 overflow-hidden">
                <h2 class="card-title">{article.title }</h2>
                <p class="h-3"></p>
                <p>by <span class="text-primary-content">{article.author}</span> on <span class="text-primary-content">{article.created_at}</span></p>
                <p class="h-3"></p>
                <p>{article.description}</p>
              </div>
              <div class="card-actions justify-end">
                <a href="blog/{article.id}" class="btn btn-primary">Continue Reading</a>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/each}

  </div>
</div>