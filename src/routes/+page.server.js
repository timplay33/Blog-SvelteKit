import { supabase } from "$lib/supabaseClient";

export async function load() {
  
let { data} = await supabase.from('posts').select().order('created_at', { ascending: false }).limit(3)
  return {
    posts: data ?? [],
  };
}