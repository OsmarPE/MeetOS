
'use server'

import { createClient } from '@/utils/supabase/server'
import { validateSignIn, validateSignUp } from '@/validations/Auth'
import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
export async function actionUpdateProfile(state: any, formData: FormData) {

    const name = formData.get('name')
    const password = formData.get('password')
    const file = formData.get('file') as File
    
    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser()
    
    let fileName = ''
    
    if (file){
        fileName = randomUUID().toString() + '.' + file.name.split('.').pop()
        const { data, error } = await supabase.storage.from('avatars').upload(fileName, file)  
             
    }

    const updatedProfile = fileName ? { name, avatar_url: fileName } : { name }
    await supabase.from('profiles').update(updatedProfile).eq('id', auth?.user?.id)

    return redirect('/dashboard/events')

}