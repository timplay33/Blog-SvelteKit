import { GetSlugFromURl } from "$lib";
import { getSinglePost } from "$lib/ghostClient";
import { error } from "@sveltejs/kit";

export async function load({params}) {
  const post = await getSinglePost(GetSlugFromURl(params.slug));
  if (!post) {
    throw error(404, "Page not found");
  }
  return {
    data: { post },
  };
}