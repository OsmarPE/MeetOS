import { formatDateLongMX, meetTypes } from '@/lib/utils'
import { Event } from '@/validations/Events'
import { Calendar, Clock3, Video } from 'lucide-react'
import React from 'react'


type EventDetailsProps = Omit<Event, 'active'> & {date: Date}

export default function EventDetails({  title, description, duration, type, created_at, date }: EventDetailsProps) {


    const typeValue = meetTypes.find(item => item.value === type)?.label ?? 'Sin tipo'

    const dateCreatedAt = formatDateLongMX(new Date(created_at))

    const dateSelectedFormatted = formatDateLongMX(date)

  return (
      <section className=''>
          <Calendar width={28} height={28} className='text-primary mb-6'/>
          <div className='flex justify-between flex-col sm:flex-row lg:flex-col gap-4'>
            <header>
              <p className='text-gray-500 text-sm'>{title}</p>
              <h3 className='font-medium text-xl leading-normal'>{title}</h3>
              <span className='text-gray-500 text-sm'>Creado el {dateCreatedAt}</span>
            </header>
            <ul className='space-y-2'>
              <li className='flex gap-3 items-center text-gray-500 text-sm'>
                <Calendar width={16} height={16} className='text-primary'/>
                <span>{dateSelectedFormatted}</span>
              </li>
              <li className='flex gap-3 items-center text-gray-500 text-sm'>
                <Clock3 width={16} height={16} className='text-primary'/>
                <span>{duration} minutos</span>
              </li>
              <li className='flex gap-3 items-center text-gray-500 text-sm'>
                <Video width={16} height={16} className='text-primary'/>
                <span>{typeValue}</span>
              </li>
            </ul>
          </div>
        </section>
  )
}
