'use server'

import { nylas } from '@/lib/nylas'
import { createClient } from '@/utils/supabase/server'
import { validateEvent } from '@/validations/Events'
import { redirect } from 'next/navigation'
import { Event } from '@/validations/Events'
import { NextRequest } from 'next/server'
import { Conferencing, Participant } from 'nylas'
import { log } from 'util'

export async function actionCreateEvent(state: any, formData: FormData) {


    const data = Object.fromEntries(formData.entries())

    const validation = await validateEvent.safeParse(data)
    console.log(validation.error);


    if (!validation.success) {
        let messages: any = {}
        validation.error.issues.forEach((issue) => {
            messages[issue.path[0]] = issue.message
        })

        return {
            title: data.title,
            url: data.url,
            description: data.description,
            duration: data.duration,
            type: data.type,
            errors: messages,
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

    console.log(error);


    return redirect('/dashboard')

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
    
    console.log(newEvent);
    
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