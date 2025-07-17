import { CalendarClock, Clock } from 'lucide-react'
import React from 'react'

export default function AvailabilityFormHeader() {
    return (
        <div className='hidden md:flex gap-4 py-4 items-center'>
            <div className='min-w-[200px]'>
                <div className='flex items-center gap-2 text-sm text-gray-400'>
                    <CalendarClock width={20} height={20} />
                    <span>Dia</span>
                </div>
            </div>
            <div className='flex-1 grid grid-cols-[1fr_auto_1fr] gap-4'>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <Clock width={20} height={20} />
                    <span>Hora de inicio</span>
                </div>
                <div className=""></div>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <Clock width={20} height={20} />
                    <span>Hora de fin</span>
                </div>
            </div>
        </div>
    )
}
