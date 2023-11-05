import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("posts").select().order('created_at', { ascending: false });
  return {
    posts: data ?? [],
  };
}