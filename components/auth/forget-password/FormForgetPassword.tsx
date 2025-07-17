'use client'
import Link from 'next/link'
import { actionForgetPassword } from '@/actions/auth'
import FormSubmit from '@/components/auth/FormSubmit'
import {
    Form
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { FormItemInput } from '@/components/form/FormItem'
import { validateForgetPassword } from '@/validations/Auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


export default function FormForgerPassword() {

    const router = useRouter()

    const form = useForm<z.infer<typeof validateForgetPassword>>({
        resolver: zodResolver(validateForgetPassword),
        defaultValues: {
            email: '',
        }
    })

    async function onSubmit(values: z.infer<typeof validateForgetPassword>) {
        const formData = new FormData()
        formData.append('email', values.email)

        const response = await actionForgetPassword(null, formData)

        if (!response.success) {
            toast.error(response.message)
            return
        }

        router.replace('?sendEmail=true')
    }


    return (
        <Form {...form}>
            <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>

                <FormItemInput
                    control={form.control}
                    name="email"
                    label="Correo electrónico"
                    type="email"
                    placeholder="Correo electrónico"
                />
                <FormSubmit className='w-full mt-8' loading={form.formState.isSubmitting}>Enviar correo de recuperación</FormSubmit>
                <p className="text-sm text-black/60 mt-4 text-center">¿Ya tienes cuenta? <Link href="/auth/register" className="text-primary hover:underline">Iniciar sesión</Link></p>
            </form>
        </Form>
    )
}
