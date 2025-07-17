import { ParticipantSchema } from '@/validations/Participant'
import { User } from '@supabase/supabase-js'
import React from 'react'
import Participant from './Participant'
import { cn } from '@/lib/utils'

interface Props {
    participants: ParticipantSchema[]
    handleRemove?: (index: number) => void,
    className?: string
}

export default function ParticipantsList({participants, handleRemove, className}: Props) {
  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
        {
        participants.map((participant: ParticipantSchema,index) => (
                <Participant
                    key={index}
                    name={participant.name}
                    onClick={() => handleRemove?.(index)}
                />
            ))
        }
    </div>
  )
}
