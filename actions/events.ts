'use server'

import { createClient } from '@/utils/supabase/client'
import { validateEvent } from '@/validations/Events'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function actionCreateEvent(state: any, formData: FormData) {

    
    const data = Object.fromEntries(formData.entries())

    const validation = await validateEvent.safeParse(data)

    console.log(data);
    
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
    


    return redirect('/dashboard')
  
}