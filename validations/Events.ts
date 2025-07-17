import { z } from 'zod'

export const validateEvent = z.object({
    title: z.string().min(3,{message: 'El nombre del evento es requerido'}),
    url: z.string().min(3,{message: 'La url es requerida'}).regex(/^[a-z]{2,6}-[a-z]{2,6}-[a-z]{2,6}$/, 'La url debe ser válida'),
    description: z.string().min(10,{message: 'La descripción debe tener al menos 10 caracteres'}).max(100,{message: 'La descripción no puede tener más de 100 caracteres'}),
    duration: z.string().min(1,{message: 'La duración es requerida'}),
    type: z.string().min(3,{message: 'El tipo de evento es requerido'}),
})

export const eventExtended = validateEvent.extend({
    id: z.number(),
    active: z.boolean(),
    created_at: z.string(),
    event_id: z.string(),
});


export type Event = z.infer<typeof eventExtended>