
// import { createClient } from "@/utils/supabase/server"

import { NextResponse } from "next/server"


export const GET = async() => {

    // const supabase = await createClient()
    // const { data: auth } = await supabase.auth.getUser() as any
    // const { data } = await supabase.from('event').select('*').eq('profile_id', auth.user.id)
    
    // console.log(data);
    
    
    return NextResponse.json({
        message: []
    })
}
