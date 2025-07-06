
'use client'
import MeetParticipantsBody from "./MeetParticipantsBody"
import useParticipants from "@/hooks/use-participant"

export default function MeetParticipants() {

  const { participants } = useParticipants()

  if (!participants.length) return  null

  return <MeetParticipantsBody />
}
