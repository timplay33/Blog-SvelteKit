import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

export async function load({params}) {

    
let { data } = await supabase.from('posts').select().eq('slug', params.slug);
  if (data[0] == undefined) {
    throw error(404, "Not Found");

  }
    return {
      articles: data ?? [],
    };
}