'use client'
import { Plus, Users, X } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Badge from '../layout/Badge'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Message from '../layout/Message'
import { Event } from '@/validations/Events'
import { actionSaveEvent } from '@/actions/events'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import FormSubmit from '../auth/FormSubmit'

type User = {
    name: string,
    email: string
}

type Props = Omit<Event, 'active'> 

export default function EventParticipants({ title, description, duration, type, created_at, url }: Props) {

    const [loading, setLoading] = useState(false)
    const [participants, setParticipants] = React.useState<User[]>([])
    const searchParams = useSearchParams()
    const [open, setopen] = useState(false)
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
    })
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!user.name || !user.email) return

        if (participants.find(item => item.email === user.email)) return

        setParticipants(prevState => [...prevState, user])
        setopen(false)
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUser({
            ...user,
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
            <article className=' border border-gray-200 rounded-lg p-8 '>
                <div className='flex justify-between items-center gap-4'>
                    <h3 className='font-medium text-base flex gap-2 items-center'>
                        <Users width={16} height={16} className='text-primary' />
                        <span>Participantes</span>
                    </h3>
                    <Dialog open={open} onOpenChange={setopen}>
                        <DialogTrigger asChild>
                            <Button variant={'outline'} size={'icon'}>
                                <Plus width={20} height={20} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className='flex gap-2 items-center'>
                                    <Users width={18} height={18} />
                                    Agregar participante
                                </DialogTitle>
                                <DialogDescription>
                                    Añade una invitación a un participante para que pueda participar en la reunión.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit}>
                                <div className='space-y-4'>
                                    <div>
                                        <Label className='inline-block mb-1' htmlFor='name'> Nombre </Label>
                                        <Input onChange={handleChange} type='text' id='name' name='name' placeholder='Ej. Mario Castillo' className='w-full' />
                                    </div>
                                    <div>
                                        <Label className='inline-block mb-1' htmlFor='email'> Correo electronico</Label>
                                        <Input onChange={handleChange} type='email' id='email' name='email' placeholder='exemple@gmail.com' className='w-full' />
                                    </div>
                                </div>
                                <div className='flex justify-end gap-4 mt-8'>
                                    <Button type='button' variant={'outline'} className='' onClick={() => setopen(false)}>Cancelar</Button>
                                    <Button className=''>Agregar</Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className='flex flex-wrap gap-4 mt-4'>
                    {
                        participants.length > 0 ?
                            participants.map((participant, index) => (
                                <Badge key={index} variant='outline' size='sm' className='relative'>
                                    {participant.name}
                                    <button onClick={() => handleRemove(index)} className='text-gray-400 cursor-pointer hover:text-primary rounded-full w-4 h-4 grid place-content-center shadow bg-white absolute top-0 right-0 -translate-y-1/2 translate-x-1/3'>
                                        <X width={10} height={10} />
                                    </button>
                                </Badge>
                            )) :
                            <Message>No hay participantes registrados</Message>
                    }
                </div>
            </article>
            <FormSubmit loading={loading} onClick={() => handleSubmitSave()} className='mt-4 ml-auto flex'>
                <Plus width={20} height={20} />
                <span>Crear Reunion</span>
            </FormSubmit>
        </>
    )
}
