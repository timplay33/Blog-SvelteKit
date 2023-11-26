import { getPosts } from "$lib/ghostClient";
import { error } from "@sveltejs/kit";

export async function load() {
  const posts = await getPosts();
  if (!posts) {
    throw error(404, "Page not found");
  }
  return {
    data: { posts },
  };
}
