import { cn } from "@/lib/utils"
import { Check, CircleMinus, LucideIcon, TriangleAlert } from "lucide-react"

type Props ={
  status: 'yes' | 'no' | 'noreply'
  className?: string
}

const statusParticipant: Record<string, {text: string, className: string, Icon:LucideIcon}> = {
    yes:{
        text:'Aceptado',
        className:'text-green-600 text-xs flex items-center gap-1.5 py-1 px-2 rounded-3xl border border-green-400 bg-green-50',
        Icon: Check
    },
    no:{
        text:'Rechazado',
        className:'text-red-600 text-xs flex items-center gap-1.5 py-1 px-2 rounded-3xl border border-red-400 bg-red-50',
        Icon: CircleMinus
    },
    noreply:{
        text:'Pendiente',
        className:'text-yellow-600 text-xs flex items-center gap-1.5 py-1 px-2 rounded-3xl border border-yellow-400 bg-yellow-50',
        Icon: TriangleAlert 
    }
}

export default function MeetParticipantStatus({ status, className = '' }: Props) {
    
    const Icon = statusParticipant[status].Icon

    return (
    <span className={cn(statusParticipant[status].className,className)}><Icon width={14} height={14} />{statusParticipant[status].text}</span>

  )
}
