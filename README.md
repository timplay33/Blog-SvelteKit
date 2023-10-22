# Blog-Sveltekit-Supabase
is the new version of my blog. Now with Supabase as the back-end and SvelteKit as the front-end.

hosted at [https://heidler.site](https://heidler.site)

## build docker image
```
docker buildx build --platform linux/amd64,linux/arm64 -t ghcr.io/timplay33/blog-sveltekit-supabase:latest --push .
```
## run container
```
docker run -p 3000:3000 ghcr.io/timplay33/blog-sveltekit-supabase:latest
```
