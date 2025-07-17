'use client'
import { Plus, Users, X } from 'lucide-react'
import React, { act, useState } from 'react'
import Message from '../layout/Message'
import { Event, EventCreatedSchedule, validateEvent } from '@/validations/Events'
import { actionSaveEvent } from '@/actions/events'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import FormSubmit from '../auth/FormSubmit'
import ParticipantsList from './url/ParticipantsList'
import ParticipantModal from './url/ParticipantModal'
import { ParticipantSchema } from '@/validations/Participant'
import ParticipantHeader from './url/ParticipantHeader'
import ParticipantTitle from './url/ParticipantTitle'

type Props = Omit<Event, 'active'> 

export default function EventParticipants({ title, description, duration, type, created_at, url }: Props) {

    const [loading, setLoading] = useState(false)
    const [participants, setParticipants] = React.useState<ParticipantSchema[]>([])
    const searchParams = useSearchParams()
    const [open, setopen] = useState(false)
    const [participant, setParticipant] = useState<ParticipantSchema>({
        name: '',
        email: '',
    })
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!participant.name || !participant.email) return

        if (participants.find(item => item.email === participant.email)) return

        setParticipants(prevState => [...prevState, participant])
        setopen(false)
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setParticipant({
            ...participant,
            [name]: value,
        })

    }

    const handleRemove = (index: number) => {
        setParticipants(prevState => prevState.filter((_, i) => i !== index))
    }


    const handleSubmitSave = async () => {

        const time = searchParams.get('time') ?? ''
        const date = searchParams.get('date') ?? ''

        const [year, month, day] = date.split('-').map(Number);
        const [hours, minutes] = time.split(':').map(Number);

        const exactDate = new Date(year, month - 1, day, hours, minutes);
        const timeStart = Math.floor(exactDate.getTime() / 1000);
        const timeEnd = timeStart + (Number(duration) * 60);


        const validation =  await EventCreatedSchedule.safeParse({
            title,
            description,
            duration: duration.toString(),
            type,
            created_at,
            url,
            time_start: timeStart,
            time_end: timeEnd,
            date,
            participants

        })
       
        if (!validation.success) {
            toast.error('Debe completar todos los campos')
            return
        }
        

        const form = new FormData()
        form.append('title', title)
        form.append('description', description)
        form.append('duration', duration?.toString() ?? '')
        form.append('type', type)
        form.append('created_at', created_at)
        form.append('url', url)
        form.append('time_start', timeStart.toString())
        form.append('time_end', timeEnd.toString())
        form.append('date', date)
        form.append('participants', JSON.stringify(participants))
        
        setLoading(true)
        const response = await actionSaveEvent('', form)
        setLoading(false)
        if(response.status !== 200) return toast.error(response.message)
        
        toast.success(response.message)
        router.push('/dashboard/events')
    }


    return (
      <>
        <article className=" border border-gray-200 rounded-lg p-8 ">
          <ParticipantHeader>
            <ParticipantTitle />
            <ParticipantModal
              open={open}
              setopen={setopen}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </ParticipantHeader>
          {participants.length > 0 ? (
            <ParticipantsList
              className="mt-4"
              participants={participants}
              handleRemove={handleRemove}
            />
          ) : (
            <Message className="mt-4">No hay participantes registrados</Message>
          )}
        </article>
        <FormSubmit
          loading={loading}
          onClick={() => handleSubmitSave()}
          className="mt-4 ml-auto flex"
        >
          <Plus width={20} height={20} />
          <span>Crear Reunion</span>
        </FormSubmit>
      </>
    );
}
