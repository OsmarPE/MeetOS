import AvailabilityDay from '@/components/availability/AvailabilityDay'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/server'
import { CalendarClock, Clock } from 'lucide-react'
import {daysTranslete} from '@/lib/utils'
import React from 'react'
import AvailableForm from '@/components/availability/AvailableForm'



export default async function page() {

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser() as any
  const { data } = await supabase.from('availibility').select('*').eq('id_profile', auth.user.id)
  
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
        <AvailableForm data={data} />
      </div>
    </div>
  )
}
