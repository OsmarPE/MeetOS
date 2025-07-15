'use server'

import { createClient } from '@/utils/supabase/server'
import { validateSignIn, validateSignUp } from '@/validations/Auth'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
interface ActionState {
    message?: string
    success?: boolean
}
export async function actionSignIn(state: ActionState | null, formData: FormData): Promise<ActionState> {
    
    let response: ActionState = {
        success: false,
        message: ''
    }


    const dataNew = Object.fromEntries(formData.entries())

    const validation = validateSignIn.safeParse(dataNew)

    if (validation.error) { 
        return {
            ...response,
            message: 'Correo electronico o contraseña son invalidos',
        }
    }
    
    const supabase = await createClient()    

    const { data, error } = await supabase.auth.signInWithPassword({
        email: validation.data.email,
        password: validation.data.password,
    })
    
    
    if(error) return {...response, message: 'Correo electronico o contraseña incorrectos' }

    redirect('/dashboard/events')
    
    return {...response, success: true}

}

export async function actionSignUp(state: ActionState | null, formData: FormData): Promise<ActionState> {

    let response: ActionState = {
        success: false,
        message: ''
    }

    const dataNew = Object.fromEntries(formData.entries())

    const validation = validateSignUp.safeParse(dataNew)

    if (validation.error) {
       return { ...response, message: 'Los datos ingresados son invalidos' }
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

    if (error) return {...response, message: 'Error al crear la cuenta' }
    
    return {...response, success: true}

}