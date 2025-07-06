'use client'
import { actionCreateEvent } from '@/actions/events'
import FormSubmit from '@/components/auth/FormSubmit'
import SelectTypeEvent from '@/components/events/SelectTypeEvent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React, { act, useActionState } from 'react'


const initialState = {
    title: '',
    url: '',
    description: '',
    duration: '',
    type: 'google-meet',
    errors: {
        title: '',
        url: '',
        description: '',
        duration: '',
        type: '',
    },
}

export default function page() {

    const [state, formAction, pending] = useActionState(actionCreateEvent, initialState)

    const { title , url, description, duration, type, errors } = state

    return (
        <div className='max-w-xl mx-auto'>
            <Card>
                <CardHeader>
                    <h2 className='text-xl font-semibold'>Crear nuevo evento</h2>
                    <p className='text-sm text-gray-400'>Crea un nuevo evento para que puedas organizar tus reuniones y eventos.</p>
                </CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <div className='space-y-4'>
                            <div className='space-y-2'>
                                <Label htmlFor='title'> Nombre del evento </Label>
                                <Input type='text' id='title' name='title' placeholder='Ej. Reunion de algebra lineal' defaultValue={title?.toString()} />
                                {errors?.title && <p className="text-destructive font-medium text-xs mt-2">{errors.title}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='url'> URL </Label>
                                <Input type='text' id='url' name='url' placeholder='Ej. url-meet-os' defaultValue={url?.toString()} />
                                {errors?.url && <p className="text-destructive font-medium text-xs mt-2">{errors.url}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='description'> Descripción </Label>
                                <Textarea id='description' name='description' placeholder='Ej.Estudiaremos los ultimos temas vistos en clase' defaultValue={description?.toString()} />
                                {errors?.description && <p className="text-destructive font-medium text-xs mt-2">{errors.description}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='duration'> Duración </Label>
                                <Select name='duration' defaultValue={'0'}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecciona una duración" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem className='hidden' value="0">selecciona una duración</SelectItem>
                                        <SelectItem value="10">10 minutos</SelectItem>
                                        <SelectItem value="15">15 minutos</SelectItem>
                                        <SelectItem value="30">30 minutos</SelectItem>
                                        <SelectItem value="45">45 minutos</SelectItem>
                                        <SelectItem value="60">1 hora</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors?.duration && <p className="text-destructive font-medium text-xs mt-2">{errors.duration}</p>}
                            </div>
                            <SelectTypeEvent defaultValue={type?.toString()} message={errors?.type} />
                        </div>
                        <div className='mt-8 flex items-center justify-end gap-4'>
                            <Button variant={'outline'} asChild>
                                <Link href='/dashboard/events'>Cancelar</Link>
                            </Button>
                            <FormSubmit loading={pending}>Crear evento</FormSubmit>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
