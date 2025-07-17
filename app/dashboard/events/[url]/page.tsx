import EventCalendar from '@/components/events/EventCalendar';
import EventDetails from '@/components/events/EventDetails';
import EventParticipants from '@/components/events/EventParticipants';
import EventTime from '@/components/events/EventTime';
import Message from '@/components/layout/Message';
import { createClient } from '@/utils/supabase/server';
import { Availibility } from '@/validations/Availibility';
import { Event } from '@/validations/Events';
import React from 'react'


export default async function page({ params, searchParams }: { params: Promise<{ url: string }>, searchParams: Promise<{ date: string | undefined }> }) {

  const slug = await params.then(item => item.url)
  const date:Date = await searchParams.then(item => item?.date ? new Date(`${item.date}T00:00:00`) : new Date())
  
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser() as any
  const { data } = await supabase.from('event').select('id,title, description, duration, type, created_at, url, active, event_id').eq('url', slug).single() as { data: Event }
  const { data: availibilities } = await supabase.from('availibility').select('*').eq('id_profile', auth.user.id)


  if(!data) return <Message>No se encontró la reunión</Message>

  const { id, title, description, duration, type, created_at, url, event_id } = data


  return (
    <div className='mt-4 space-y-4 w-[90%] mx-auto max-w-5xl'>
      <article className=' border border-gray-200 rounded-lg p-6 sm:p-8 grid gap-4 lg:grid-cols-[2fr_5fr] '>
        <EventDetails
          title={title} 
          description={description} 
          duration={duration} 
          type={type} 
          created_at={created_at}
          url={url}
          date={date}
          event_id={event_id}
          id={id}
        />
        <div className='grid gap-4 sm:grid-cols-[3fr_2fr] lg:grid-cols-2'>
          <section>
            <EventCalendar availibilities={availibilities as Availibility[]} />
          </section>
          <section>
            <EventTime range={+duration}/>
          </section>
        </div>
      </article>
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
