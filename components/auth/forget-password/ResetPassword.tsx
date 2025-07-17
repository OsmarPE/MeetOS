'use client'
import FormSubmit from '../FormSubmit'
import { Form } from "@/components/ui/form"
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { FormItemInput } from '../../form/FormItem'
import { validateResetPassword } from '@/validations/Auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Lock } from 'lucide-react'
import Container from '@/components/layout/Container'
import CardInfo from '@/components/layout/CardInfo'


export default function FormForgerPassword({ code }: { code: string  }) {

    const [modeRecovery, setModeRecovery] = useState(false)


    const router = useRouter()
    const supabase = createClient()
    const form = useForm<z.infer<typeof validateResetPassword>>({
        resolver: zodResolver(validateResetPassword),
        defaultValues: {
            password: '',
            confirmPassword: '',
        }
    })

    useEffect(() => {
        
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                setModeRecovery(true)
            } 
        })
        
    }, [])

    async function onSubmit(values: z.infer<typeof validateResetPassword>) {
        
        const { password } = values

        const { error } = await supabase.auth.updateUser({ password })
        console.log(error)
        if (error) return toast.error('Error al cambiar la contraseña')

        toast.success('Contraseña cambiada correctamente')

        router.replace('/')
    }

    if (!modeRecovery) return <CardInfo icon={Lock} variant='error' title='Token invalido' description='Manda nuevamente un correo para restablecer tu contraseña' buttonHref='/auth/forget-password' variantButton='outline' buttonText='Restablecer contraseña' />

    return (
        <Container className="max-w-xs">
      <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
         <Lock className="size-4"/>
      </div>
         <h1 className="text-center text-2xl font-medium mt-6">Nueva contraseña</h1>
         <p className="text-center text-black/60 ">Ingrese su nueva contraseña</p>
        <Form {...form}>
            <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    <FormItemInput
                        control={form.control}
                        name="password"
                        label="Nueva contraseña"
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
                <FormSubmit className='w-full mt-8' loading={form.formState.isSubmitting}>Restablecer contraseña</FormSubmit>
            </form>
        </Form>
    </Container>
    )
}
