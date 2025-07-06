'use client'
import { Participant } from "nylas"
import { createContext, useState } from "react"


export type ParticipantsContextType = {
  participants: Participant[]
  handleChangeParticipants: (participants: Participant[]) => void,
  clearParticipants: () => void
}

export const ParticipantsContext = createContext<ParticipantsContextType>(null!)


export const ParticipantsProvider = ({ children }: { children: React.ReactNode }) => {

  const [participants, setParticipants] = useState<Participant[]>([])

  const handleChangeParticipants = (participants: Participant[]) => {
    setParticipants(participants)
  }

  const clearParticipants = () => {
    setParticipants([])
  }

  return (
    <ParticipantsContext.Provider value={{ participants, handleChangeParticipants, clearParticipants }}>
      {children}
    </ParticipantsContext.Provider>
  )
}
