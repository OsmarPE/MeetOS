'use server'

import { createClient } from '@/utils/supabase/server'
import { validateSignIn, validateSignUp } from '@/validations/Auth'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
export async function actionSignIn(state: any, formData: FormData) {
    

    const dataNew = Object.fromEntries(formData.entries())

    const validation = validateSignIn.safeParse(dataNew)

    if (validation.error) { 
        let messages: any = {}
        validation.error.issues.forEach((issue) => {
            messages[issue.path[0]] = issue.message
        })
        
        return {
            email: dataNew.email,
            password: dataNew.password,
            errors: messages,
        }
    }


    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email: validation.data.email,
        password: validation.data.password,
    })
    
    if(error){
        return redirect('/auth/login')
    }
    
   
    return redirect('/dashboard/events')

}

export async function actionSignUp(state: any, formData: FormData) {

    const dataNew = Object.fromEntries(formData.entries())

    const validation = validateSignUp.safeParse(dataNew)

    if (validation.error) {
        let messages: any = {}
        validation.error.issues.forEach((issue) => {
            messages[issue.path[0]] = issue.message
        })

        return {
            name: dataNew.name,
            email: dataNew.email,
            password: dataNew.password,
            confirmPassword: dataNew.confirmPassword,
            errors: messages,
        }
    }

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
        email: validation.data.email,
        password: validation.data.password,
        options: {
            emailRedirectTo: 'http://localhost:3000',
            data:{
                name: validation.data.name,
            }
        },
    })

    return redirect('/')

}