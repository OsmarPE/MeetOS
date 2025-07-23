'use client'
import { useState } from 'react'
import Link from 'next/link'
import { actionSignUp } from '@/actions/auth'
import Google from '@/assets/img/Google'
import {
  Form
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { validateSignUp } from '@/validations/Auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Mail } from 'lucide-react'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { FormItemInput } from '@/components/form/FormItem'
import FormSubmit from '@/components/auth/FormSubmit'
import CardInfo from '@/components/layout/CardInfo'
import FormRegisterHeader from '@/components/auth/register/FormRegisterHeader'


export default function RegisterPage() {
    
    const router = useRouter()
    const [sendEmail, setsendEmail] = useState(false)
    
    const form = useForm<z.infer<typeof validateSignUp>>({
    resolver: zodResolver(validateSignUp),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }    
    })

    async function onSubmit(values: z.infer<typeof validateSignUp>) {
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('confirmPassword', values.confirmPassword)

        const response = await actionSignUp(null, formData)
        
        if(!response.success){
            toast.error(response.message)   
        }
        
        setsendEmail(true)
    }

    if(sendEmail) return (
        <CardInfo
            className='mx-auto' 
            icon={Mail} 
            variant='success'
            title='Enviando correo de verificacion' 
            description='Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.' 
            buttonHref='/auth/login'
            buttonText='Regresar a inicio'
        />
)

    return (
        <Container className="max-w-xs">
            <FormRegisterHeader />
            <Form {...form}>
            <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <Button type='button' className='w-full text-gray-700 shadow-sm' variant={'outline'}>
                        <Google width={18} height={18} />
                        Google
                    </Button>
                    <div className='login-separator'>
                        <p className='text-gray-400 w-max mx-auto'>o</p>
                    </div>
                    <div className='space-y-4'>
                        <FormItemInput
                            control={form.control}
                            name="name"
                            label="Nombre de usuario"
                            type="text"
                            placeholder="Andrea Santos"
                        />
                        <FormItemInput
                            control={form.control}
                            name="email"
                            label="Correo electrónico"
                            type="email"
                            placeholder="Correo electrónico"
                        />

                        <FormItemInput
                            control={form.control}
                            name="password"
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"    
                        />
                        <FormItemInput
                            control={form.control}
                            name="confirmPassword"
                            label="Confirmar contraseña"
                            type="password"
                            placeholder="Repetir contraseña"
                        />
                    </div>
                        
                </div>
                <FormSubmit className='w-full mt-8' loading={form.formState.isLoading}>Crear cuenta</FormSubmit>
                <p className="text-sm text-black/60 mt-4 text-center">¿Ya tienes una cuenta? <Link href="/auth/login" className="text-primary hover:underline">Inicia sesión</Link></p>
            </form>
            </Form>
        </Container>
    )
}
