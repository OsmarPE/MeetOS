import { z } from 'zod'

export const validateEvent = z.object({
    title: z.string().min(3,{message: 'El nombre del evento es requerido'}),
    url: z.string().min(3,{message: 'La url es requerida'}),
    description: z.string().min(3,{message: 'La descripción es requerida'}),
    duration: z.string().optional(),
    type: z.string().min(3,{message: 'El tipo de evento es requerido'}),
})

export const eventExtended = validateEvent.extend({
    active: z.boolean(),
    created_at: z.string(),
});


export type Event = z.infer<typeof eventExtended>