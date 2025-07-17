import React from 'react'
import EventCard from './EventCard'

export default function EventList({ events, grandEmail, grantId }: { events: any[], grandEmail: string, grantId: string }) {
    return (
        <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] mt-6'>
            {
                events.map((event: any) => (
                    <EventCard key={event.id} event={event} grandEmail={grandEmail} grantId={grantId} />
                ))
            }
        </div>
    )
}
