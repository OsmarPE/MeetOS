import { createClient } from "@/utils/supabase/server"

export const GET = async() => {

    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const { data: availibility} = await supabase.from('availibility').select('day,active').eq('id_profile', data?.user?.id)

    return Response.json({
        message: availibility
    })
}