import { createClient } from "@/utils/supabase/server"


export const GET = async () => {
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from('profiles').select('name, email, id, avatar,conf_grant_id').eq('id', auth?.user?.id).single()
  return Response.json({
    message: 'profile',
  })
}