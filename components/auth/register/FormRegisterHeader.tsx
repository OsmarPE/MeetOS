import { Calendar } from 'lucide-react'
import React from 'react'

export default function FormRegisterHeader() {
    return (
        <>
            <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
                <Calendar className="size-4" />
            </div>
            <h1 className="text-center text-2xl font-medium mt-6">Crear cuenta</h1>
             <p className="text-center text-black/60 ">Llena el formulario para crear tu cuenta</p>
        </>
    )
}
