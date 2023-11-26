/*

import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {
        
        const data = await request.formData();
        const { error } = await supabase.from('form').insert({name:data.get('name'), email:data.get('email'), message:data.get('message')});
        if (error) {
            throw error;
        }else{
            throw redirect(303, "/contact/success")
        }


    }

}
*/