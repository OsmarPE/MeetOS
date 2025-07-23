import EventParticipants from '@/components/events/EventParticipants';
import Meeting from '@/components/events/url/Meeting';
import MeetingCalendar from '@/components/events/url/MeetingCalendar';
import MeetingInfo from '@/components/events/url/MeetingInfo';
import MeetingSchedule from '@/components/events/url/MeetingSchedule';
import MeetingTime from '@/components/events/url/MeetingTime';
import Message from '@/components/layout/Message';
import { createClient } from '@/utils/supabase/server';
import { Event } from '@/validations/Events';
import React from 'react'


export default async function SchedulerEventPage({ params, searchParams }: { params: Promise<{ url: string }>, searchParams: Promise<{ date: string | undefined }> }) {

  const slug = await params.then(item => item.url)
  const date:Date = await searchParams.then(item => item?.date ? new Date(`${item.date}T00:00:00`) : new Date())
  
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser() as { data: { user: { id: string } } | null }
  const { data } = await supabase.from('event').select('id,title, description, duration, type, created_at, url, active, event_id, profiles(name)').eq('url', slug).single() as { data: Event & { profiles: { name: string } } }

  if(!data) return <Message>No se encontró la reunión</Message>

  const { id, title, description, duration, type, created_at, url, event_id } = data

  return (
    <div className='mt-4 space-y-4 w-[90%] mx-auto max-w-5xl'>
      <Meeting>
        <MeetingInfo
          title={title} 
          duration={duration} 
          type={type} 
          created_at={created_at}
          date={date}
          username={data?.profiles?.name ?? 'Usuario no encontrado'}
        />
        <MeetingSchedule>
            <MeetingCalendar />
            <MeetingTime duration={+duration}/>
        </MeetingSchedule>
      </Meeting>
      <EventParticipants 
        title={title} 
        description={description} 
        duration={duration} 
        type={type} 
        created_at={created_at}
        url={url}
        event_id={event_id}
        id={id}
      />
    </div>

  )
}
