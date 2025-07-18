'use server'

import { nylas } from '@/lib/nylas'
import { createClient } from '@/utils/supabase/server'
import { validateEvent } from '@/validations/Events'
import { redirect } from 'next/navigation'
import { Event } from '@/validations/Events'
import { NextRequest } from 'next/server'
import { Conferencing, Participant } from 'nylas'
import { log } from 'util'

interface ActionState {
    message?: string
    success?: boolean
}

export async function actionCreateEvent(state: ActionState | null, formData: FormData): Promise<ActionState> {

    let response: ActionState = {
        success: false,
        message: ''
    }

    const data = Object.fromEntries(formData.entries())

    const validation = await validateEvent.safeParse(data)


    if (!validation.success) {
        return {
            ...response,
            message: 'Los datos ingresados son invalidos',
        }

    }

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser()


    const { error } = await supabase.from('event').insert({
        title: validation.data.title,
        profile_id: auth?.user?.id,
        url: validation.data.url,
        description: validation.data.description,
        duration: validation.data.duration,
        type: validation.data.type,
        active: true
    })

    if (error) {
        return {
            ...response,
            message: 'Error al crear el evento',
        }
    }

    return { success: true, message: 'Evento creado correctamente, ya puedes agendar tu evento al darle clic a los 3 puntitos' }

}

export async function actionSaveEvent(state: any, formData: FormData):Promise<{message: string,status: number}> {

    try {
    const data = Object.fromEntries(formData.entries())
    const participants = JSON.parse(data.participants as string) as Participant[]
   
 
    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser()
    const {data: profile } = await supabase.from('profiles').select('id,grant_id,grant_email,conf_grant_id').eq('id', auth?.user?.id).single() 
  
    
    const newEvent = await nylas.events.create({
        identifier: profile?.grant_id ?? '',
        queryParams:{
            calendarId: profile?.grant_email ?? '',
        },
        requestBody: {
            title: data.title.toString(),
            description: data.description.toString(),
            participants,
            when: {
                startTime: Number(data.time_start),
                endTime: Number(data.time_end),
                startTimezone: 'America/Mexico_City',
                endTimezone: 'America/Mexico_City'
            },
            busy: false,
            visibility: 'public',
            conferencing: {
                provider: data.type.toString(),
                autocreate: {
                    ...(data.type === 'Zoom Meeting' && { conf_grant_id: profile?.conf_grant_id, details:{ meeting_code: "auto"} })
                },
                
            } as Conferencing
        }
    });
    
    
    const updateEvent = await supabase.from('event').update({
        event_id: newEvent.data.id
    }).eq('url', data.url)

    
    return {
        message: 'Evento creado correctamente',
        status: 200,
    }
    } catch (error) {
        console.log(error);
        
        return {
            message: 'No se pudo crear el evento, intenta nuevamente',
            status: 500,
        }
    }

}