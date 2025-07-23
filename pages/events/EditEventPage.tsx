import { nylas } from "@/lib/nylas"
import { createClient } from "@/utils/supabase/server"


export default async function EditEventPage({id}:{id: string}) {
  
  const supabase = await createClient()
  const { data } = await supabase.from('event').select('*').eq('event_id', id).single()
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.profile_id).single()
  
  const Eventid = id
  const grandEmail = profile.grant_email
  const grantId = profile.grant_id
  
  const event =  await nylas.events.find({
    identifier: profile.grant_id,
    queryParams: {
      calendarId: grandEmail,
    },
    eventId: Eventid,
  })
  
  return (
    <div>EventEventPage {id}</div>
  )
}
