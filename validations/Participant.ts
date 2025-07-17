import z from "zod";

const ParticipantSchema = z.object({
  name: z.string(),
  email: z.string()
});

const ParticipantUpdate = ParticipantSchema.extend({
  status:z.boolean()
});

export type Participant = z.infer<typeof ParticipantUpdate>;

export type ParticipantSchema = z.infer<typeof ParticipantSchema>;