'use client'
import { useActionState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { actionSignIn } from '@/actions/auth'
import Google from '@/assets/img/Google'
import FormSubmit from '@/components/auth/FormSubmit'
import {
  Form
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { FormItemInput } from '@/components/form/FormItem'
import { validateSignIn } from '@/validations/Auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


export default function FormLogin() {
    
    const router = useRouter()
    
    const form = useForm<z.infer<typeof validateSignIn>>({
    resolver: zodResolver(validateSignIn),
    defaultValues: {
      email: '',
      password: '',
    }    
    })

    async function onSubmit(values: z.infer<typeof validateSignIn>) {
        const formData = new FormData()
        formData.append('email', values.email)
        formData.append('password', values.password)

        const response = await actionSignIn(null, formData)
        
        if(!response.success){
            toast.error(response.message)
            
        }
    }


    return (
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
                </div>
                <Link href="/auth/forget-password" className="text-sm text-gray-500 block w-max ml-auto mt-4 text-center hover:underline">¿Olvidaste tu contraseña?</Link>
            </div>
            <FormSubmit className='w-full mt-8' loading={form.formState.isSubmitting}>Iniciar sesión</FormSubmit>
            <p className="text-sm text-black/60 mt-4 text-center">¿No tienes cuenta? <Link href="/auth/register" className="text-primary hover:underline">Crea una cuenta</Link></p>
        </form>
        </Form>
    )
}
