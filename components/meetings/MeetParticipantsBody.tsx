import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { UserRound, Users, UsersRound } from "lucide-react"
import MeetParticipantStatus from "./MeetParticipantStatus"
import useParticipants from "@/hooks/use-participant"

export default function MeetParticipantsBody() {

    const { participants, clearParticipants } = useParticipants()

    return (
        <Dialog open onOpenChange={() => clearParticipants()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2"> 
                        <UsersRound width={20} height={20} />
                       Participantes
                    </DialogTitle>
                    <DialogDescription>
                        Usuarios que estaran en la reunión
                    </DialogDescription>
                </DialogHeader>
                
                    <ul className="space-y-4 mt-2">
                        {
                            participants.map((participant: any) => (
                                <li key={participant.id} className="flex items-center justify-between gap-3 text-sm">  
                                    <div className="">
                                        <span className="font-medium">{participant.name}</span>
                                        <p className="text-gray-500">{participant.email}</p>
                                    </div>
                                    <MeetParticipantStatus status={participant.status} />
                                </li>
                            ))
                        }
                    </ul>
                
            </DialogContent>
        </Dialog>
    )
}
