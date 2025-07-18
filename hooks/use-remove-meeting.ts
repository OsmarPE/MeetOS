
'use client'
import { useContext } from "react"
import { MeetingRemoveEventContext } from "@/context/MeetingRemoveEvent"

export default function useRemoveMeeting() {

  const context = useContext(MeetingRemoveEventContext)

  if (!context) {
    throw new Error('useRemoveMeeting must be used within a MeetingRemoveEventProvider')
  }

  return context
}