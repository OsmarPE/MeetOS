import { z } from 'zod'


export const validateSignIn = z.object({
    email: z.string().email({message: 'Proporcione un correo electrónico válido'}),
    password: z.string().min(3,{message: 'Ingrese una contraseña de al menos 3 caracteres'}),
})


export const validateSignUp = z.object({
    name: z.string().min(3,{message: 'Ingrese un nombre válido'}),
    email: z.string().email({message: 'Proporcione un correo electrónico válido'}),
    password: z.string().min(3,{message: 'Ingrese una contraseña de al menos 3 caracteres'}),
    confirmPassword: z.string().min(3,{message: 'Ingrese una contraseña de al menos 3 caracteres'}),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas deben ser iguales',
    path: ['confirmPassword'],
})