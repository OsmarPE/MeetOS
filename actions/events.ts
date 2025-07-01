'use server'

import { nylas } from '@/lib/nylas'
import { createClient } from '@/utils/supabase/server'
import { validateEvent } from '@/validations/Events'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

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

export async function actionSaveEvent(state: any, formData: FormData) {

    const data = Object.fromEntries(formData.entries())
    console.log(data)

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser()
    const d = await supabase.from('profile').select('id').eq('id', auth?.user?.id)

    
    // const newEvent = await nylas.events.create({
    //     identifier: data.title,
    // })

    return redirect('/dashboard')

}