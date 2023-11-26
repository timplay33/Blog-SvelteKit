import { getSinglePage } from "$lib/ghostClient";
import { error } from "@sveltejs/kit";

export async function load({params}) {
  const page = await getSinglePage(params.slug);
  if (!page) {
    throw error(404, "Page not found");
  }
  return {
    data: { page },
  };
}