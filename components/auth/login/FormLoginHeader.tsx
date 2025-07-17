import { Calendar } from 'lucide-react'
import React from 'react'

export default function FormLoginHeader() {
    return (
        <>
            <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
                <Calendar className="size-4" />
            </div>
            <h1 className="text-center text-2xl font-medium mt-6">Iniciar sesión</h1>
             <p className="text-center text-black/60 ">Inicia sesión con tu cuenta de Google</p>
        </>
    )
}
