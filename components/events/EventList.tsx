import React from 'react'
import EventCard from './EventCard'
import { Event } from '@/validations/Events'

export default function EventList({ events, grandEmail, grantId }: { events: Event[], grandEmail: string, grantId: string }) {
    return (
        <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] mt-6'>
            {
                events.map((event) => (
                    <EventCard 
                        key={event.id} 
                        id={event.id}
                        title={event.title}
                        description={event.description}
                        duration={event.duration}
                        type={event.type}
                        url={event.url}
                        active={event.active}
                        event_id={event.event_id}
                        grandEmail={grandEmail} 
                        grantId={grantId} 
                        created_at=''
                    />
                ))
            }
        </div>
    )
}
