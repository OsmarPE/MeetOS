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
            name: data.name,
            url: data.url,
            description: data.description,
            duration: data.duration,
            type: data.type,
            errors: messages,
        }
        
    }

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser()

    console.log(auth);

    const { name } = validation.data    

    

    const { error } = await supabase.from('event').insert({
        title: name,
        profile_id: auth?.user?.id,
        url: validation.data.url,
        description: validation.data.description,
        duration: validation.data.duration,
        type: validation.data.type,
    })

    console.log(error);
    

    return redirect('/dashboard')
  
}