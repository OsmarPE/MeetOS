import { z } from 'zod'


export const validateSignIn = z.object({
    email: z.string().email({message: 'Ingrese un correo electrónico válido'}),
    password: z.string().min(3,{message: 'Ingrese una contraseña de al menos 3 caracteres'}).max(100,{message: 'Ingrese una contraseña no tan larga'}),
})


export const validateSignUp = z.object({
    name: z.string().min(3,{message: 'Ingrese un nombre válido'}),
    email: z.string().email({message: 'Ingrese un correo electrónico válido'}),
    password: z.string().min(8,{message: 'Ingrese una contraseña de al menos 8 caracteres'}).max(30,{message: 'Ingrese una contraseña no tan larga'}),
    confirmPassword: z.string().min(8,{message: 'Ingrese una contraseña de al menos 8 caracteres'}).max(30,{message: 'Ingrese una contraseña no tan larga'}),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas deben ser iguales',
    path: ['confirmPassword'],
})

export const validateForgetPassword = z.object({
    email: z.string().email({message: 'Ingrese un correo electrónico válido'}),
})

export const validateResetPassword = z.object({
    password: z.string().min(8,{message: 'Ingrese una contraseña de al menos 8 caracteres'}).max(30,{message: 'Ingrese una contraseña no tan larga'}),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas deben ser iguales',
    path: ['confirmPassword'],
})