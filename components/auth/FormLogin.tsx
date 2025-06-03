'use client'
import { useActionState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { actionSignIn } from '@/actions/auth'
import Google from '@/assets/img/Google'
import FormSubmit from './FormSubmit'

const initialState = {
    email: '',
    password: '',
    errors: {
        email: '',
        password: '',
    },
}

export default function FormLogin() {

    const [state, formAction, pending] = useActionState(actionSignIn, initialState)
 
    const { errors, email, password } = state

    return (
        <form className="mt-8" action={formAction}>
            <div className="space-y-4">
                <Button type='button' className='w-full text-gray-700 shadow-sm' variant={'outline'}>
                    <Google width={18} height={18} />
                    Google
                </Button>
                <div className='login-separator'>
                    <p className='text-gray-400 w-max mx-auto'>o</p>
                </div>
                <div>
                    <Label htmlFor="email" className="mb-2 inline-block">Correo electrónico</Label>
                    <Input type="email" id="email" name="email" placeholder="Correo electrónico" className='' defaultValue={email?.toString()} />
                    {errors?.email && <p className="text-destructive font-medium text-xs mt-2">{errors.email}</p>}
                </div>
                <div>
                    <Label htmlFor="password" className="mb-2 inline-block">Contraseña</Label>
                    <Input type="password" id="password" name="password" placeholder="Contraseña" defaultValue={password?.toString()} />
                    {errors?.password && <p className="text-destructive font-medium text-xs mt-2">{errors.password}</p>}
                </div>
            </div>
            <FormSubmit className='w-full mt-8' loading={pending}>Iniciar sesión</FormSubmit>
            <p className="text-sm text-black/60 mt-4 text-center">¿No tienes cuenta? <Link href="/auth/register" className="text-primary hover:underline">Crea una cuenta</Link></p>
        </form>
    )
}
