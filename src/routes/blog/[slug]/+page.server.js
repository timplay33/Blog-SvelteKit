import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";

export async function load({params}) {

    
let { data } = await supabase.from('posts').select().eq('slug', params.slug);

    return {
      articles: data ?? [],
    };
}