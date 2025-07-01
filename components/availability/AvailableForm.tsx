'use client'
import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import AvailabilityDay from './AvailabilityDay'
import { cn, daysTranslete } from '@/lib/utils'
import { actionSaveAvailibility } from '@/actions/availibility'
import { Availibility } from '@/validations/Availibility'
import { toast } from 'sonner'
import FormSubmit from '../auth/FormSubmit'

interface Props {
  data:any
}

export default function AvailableForm({data}: Props) {
  
    const [availibilities, setAvailibilities] = useState<Availibility[]>(data)
    const [loading, setLoading] = useState(false)

    const handleChangeStatus = (value: boolean, id: number) => {  
        const newDays = availibilities.map((day) => (day.id !== id ? day : {...day, active: value}))
        setAvailibilities(newDays)
    }

    const handleTimeChange = (id: number, startTime: string = '', endTime: string = '') => {
        const newDays = availibilities.map((day) => (day.id !== id ? day : {...day, time_start: startTime ? startTime : day.time_start, time_end: endTime ? endTime : day.time_end}))
        setAvailibilities(newDays)
    }

    
    const handleSubmit = async() => {
      try {
        setLoading(true)
        const form = new FormData()
        form.append('availibilities', JSON.stringify(availibilities))
        const { message, status } =  await actionSaveAvailibility('', form) 
        
        if (status !== 200) throw new Error(message)

        toast.success(message)
        
      } catch (error) {
        
        if (error instanceof Error) {
          toast.error(error.message)
        }

      } finally {
        setLoading(false)
      }
    }

    
    return (
    <>
    <div className={cn('space-y-1 transition-opacity', loading ? 'opacity-50 pointer-events-none' : '')}>
           {
             availibilities?.map((availibility) => (
               <AvailabilityDay availibility={availibility}  handleChangeStatus={handleChangeStatus} handleTimeChange={handleTimeChange} />
             ))
           }
         </div>
        <FormSubmit onClick={handleSubmit} loading={loading} className='ml-auto flex mt-8' >
            Guardar horario
        </FormSubmit>
    </>
  )
}
