'use client'
import React, { useState } from 'react'
import { actionSaveAvailibility } from '@/actions/availibility'
import { Availibility } from '@/validations/Availibility'
import { toast } from 'sonner'
import FormSubmit from '../auth/FormSubmit'
import AvailabilityList from './AvailabilityList'

interface Props {
  data: any
}

export default function AvailabilityForm({ data = [] }: Props) {

  const [availibilities, setAvailibilities] = useState<Availibility[]>(() => data.sort((a: any, b: any) => a.id - b.id))
  const [loading, setLoading] = useState(false)

  const handleChangeStatus = (value: boolean, id: number) => {
    const newDays = availibilities.map((day) => (day.id !== id ? day : { ...day, active: value }))
    setAvailibilities(newDays)
  }

  const handleTimeChange = (id: number, startTime: string = '', endTime: string = '') => {
    const newDays = availibilities.map((day) => (day.id !== id ? day : { ...day, time_start: startTime ? startTime : day.time_start, time_end: endTime ? endTime : day.time_end }))
    setAvailibilities(newDays)
  }


  const handleSubmit = async () => {
    try {
      setLoading(true)
      const form = new FormData()
      form.append('availibilities', JSON.stringify(availibilities))
      const { message, status } = await actionSaveAvailibility('', form)

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
      <AvailabilityList data={availibilities} handleChangeStatus={handleChangeStatus} handleTimeChange={handleTimeChange} className={loading ? 'opacity-50 pointer-events-none' : ''} />
      <FormSubmit onClick={handleSubmit} loading={loading} className='ml-auto flex mt-8' >
        Guardar horario
      </FormSubmit>
    </>
  )
}
