import { z } from 'zod'

export const AvailibilitySchema = z.object({
    time_start: z.string(),
    time_end: z.string(),
    day: z.string(),
    active: z.boolean(),
})


export type Availibility = z.infer<typeof AvailibilitySchema> & {
    id: number
}