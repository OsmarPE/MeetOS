'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Users } from 'lucide-react'
import { Participant } from 'nylas'
import useParticipants from '@/hooks/use-participant'

export default function MeetCardShowParticipanButton({participants}: {participants: Participant[]}) {

    const participantsCount = participants.length

    const { handleChangeParticipants } = useParticipants()

    
    return (
        <button onClick={() => handleChangeParticipants(participants)} className="cursor-pointer flex items-center gap-2 text-sm text-gray-400 transition hover:text-primary">
            <Users width={16} height={16} />
            <span>{participantsCount} {participantsCount === 1 ? 'participante' : 'participantes'}</span>
        </button>
    )
}
