import { CreateUrl } from '$lib';
import { getPosts, getPages } from '$lib/ghostClient';
import { error } from '@sveltejs/kit';


const posts = await getPosts();
if (!posts) {
  throw error(500, "Api error");
}
const pages = await getPages();
if (!pages) {
  throw error(500, "Api error");
}
const site = "https://heidler.site"

/** @type {import('./$types').RequestHandler} */
export async function GET({
    url
}) {
    const body = sitemap(posts, pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
  ${pages.map((page) => `
  <url>
    <loc>${site}/${page.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
  ${posts.map((post) =>`
  <url>
    <loc>${site}/${CreateUrl(post)}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updated_at}</lastmod>
    <priority>0.5</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
