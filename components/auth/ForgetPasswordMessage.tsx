import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'

export default function ForgetPasswordMessage() {
    return (
        <div className='border text-center border-gray-200 rounded-lg p-6 max-w-md'>
            <div className='mb-4 flex mx-auto items-center text-primary justify-center size-12 rounded-full border border-gray-200'>
                <Mail className='size-5'/>
            </div>
            <h1 className='text-lg font-medium leading-6'>Hemos enviado un enlace de recuperación a tu correo electrónico. </h1>
            <p className='text-black/60 text-sm mt-1'>Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.</p>
            <Button asChild>
                <Link href='/' className='text-primary mt-6  font-medium w-full'>
                    Regresar a inicio
                </Link>
            </Button>
        </div>
    )
}
