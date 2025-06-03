
import AvailabilityDay from '@/components/availability/AvailabilityDay'
import { Button } from '@/components/ui/button'
import { CalendarClock, Clock } from 'lucide-react'
import React from 'react'

export default function page() {



  return (
    <div>
      <h2 className='text-2xl font-semibold'>Disponibilidad</h2>
      <p className='text-sm text-gray-400'>Selecciona los dias que deseas estar disponible</p>
      <div className='mt-6 max-w-[800px]'>
        <div className='flex gap-4 py-4 items-center'>
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
        <div className='space-y-1'>
          <AvailabilityDay />
          <AvailabilityDay />
          <AvailabilityDay />
        </div>
        <Button size={'lg'} className='ml-auto w-max block mt-8'>Guardar horario</Button> 
     
      </div>
    </div>
  )
}
