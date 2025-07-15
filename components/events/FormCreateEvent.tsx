'use client'
import { useActionState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { actionSignIn } from '@/actions/auth'
import Google from '@/assets/img/Google'
import {
  Form
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { FormItemInput, SelectFormField, TextareaFormField } from '../form/FormItem'
import { validateEvent } from '@/validations/Events'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import FormSubmit from '../auth/FormSubmit'
import { meetTypes } from '@/lib/utils'
import SelectTypeEvent from './SelectTypeEvent'
import { actionCreateEvent } from '@/actions/events'


export default function FormCreateEvent() {
    
    const router = useRouter()
    
    const form = useForm<z.infer<typeof validateEvent>>({
    resolver: zodResolver(validateEvent),
    defaultValues: {
      title: '',
      url: '',
      description: '',
      duration: '', 
      type: 'Google Meet',
    }    
    })

    async function onSubmit(values: z.infer<typeof validateEvent>) {
        const formData = new FormData()
        formData.append('title', values.title)
        formData.append('url', values.url)
        formData.append('description', values.description)
        formData.append('duration', values.duration)
        formData.append('type', values.type)

        const response = await actionCreateEvent(null, formData)

        if (!response.success) {
            toast.error(response.message)
            return
        }

        toast.success(response.message)
        router.push('/dashboard/events')
      
    }


    return (
        <Form {...form}>
        <form  onSubmit={form.handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    <FormItemInput
                        control={form.control}
                        name="title"
                        label="Titulo del evento"
                        type="text"
                        placeholder="Reunion de algebra lineal"
                    />

                    <FormItemInput
                        control={form.control}
                        name="url"
                        label="URL"
                        type="text"
                        placeholder="url-meet-os"
                    />

                    <TextareaFormField
                        control={form.control}
                        name="description"
                        label="Descripción"
                        placeholder="Descripción del evento"
                    />

                    <SelectFormField
                        control={form.control}
                        name="duration"
                        label="Duración"
                        className='w-full'
                        placeholder="Selecciona una duración"
                        options={[
                            { value: '0', label: 'Selecciona una duración' },
                            { value: '10', label: '10 minutos' },
                            { value: '15', label: '15 minutos' },
                            { value: '30', label: '30 minutos' },
                            { value: '45', label: '45 minutos' },
                            { value: '60', label: '1 hora' }
                        ]}
                    />


                     <SelectTypeEvent defaultValue={form.getValues('type')} message={form.formState.errors.type?.message} onChange={(value) => form.setValue('type', value)} />


                   </div>
                   <div className='mt-8 flex items-center justify-end gap-4'>
                        <Button variant={'outline'} asChild>
                            <Link href='/dashboard/events'>Cancelar</Link>
                        </Button>
                        <FormSubmit className='' loading={form.formState.isSubmitting}>Crear evento</FormSubmit>
                   </div>
        </form>
        </Form>
    )
}
