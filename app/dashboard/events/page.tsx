import EventHeader from '@/components/events/EventHeader'
import EventList from '@/components/events/EventList'
import EventPlaceholderNewEvent from '@/components/events/EventPlaceholderNewEvent'
import { createClient } from '@/utils/supabase/server'
import { Event } from '@/validations/Events'
import React from 'react'

export default async function page() {

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser() as any
    const { data:user } = await supabase.from('profiles').select('grant_id').eq('id', auth.user.id).single()
    const { data } = await supabase.from('event').select('id,title,description,duration,type,url,active,event_id').eq('profile_id', auth.user.id) as { data: Event[] | null }
  return (
    <div>
      <EventHeader thereEvents={!!data?.length} />
      
      {data?.length === 0 ?
        (
          <EventPlaceholderNewEvent />
        ) : (
          <EventList events={data ?? []} grandEmail={auth.user?.email} grantId={user?.grant_id} />
        )

      }
    </div>
  )
}
