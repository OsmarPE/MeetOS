
import { useContext } from "react"
import { ParticipantsContext } from "@/context/ParticipantsContext"

export default function useParticipants() {

  const context = useContext(ParticipantsContext)

  if (!context) throw new Error('ParticipantsContext not found')
  
  return context
}