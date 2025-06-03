import { z } from 'zod'

export const validateEvent = z.object({
    name: z.string().min(3,{message: 'El nombre del evento es requerido'}),
    url: z.string().min(3,{message: 'La url es requerida'}),
    description: z.string().min(3,{message: 'La descripción es requerida'}),
    duration: z.string().optional(),
    type: z.string().min(3,{message: 'El tipo de evento es requerido'}),
})