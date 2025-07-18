import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formedDate, formedTime } from "@/lib/utils";
import { Calendar, Clock1, Trash, Video } from "lucide-react";
import Link from "next/link";
import { Event } from "nylas";
import MeetCardShowParticipanButton from "./MeetCardShowParticipanButton";
import MeetButtonDelete from "./MeetButtonDelete";

type EventWithDetails = Pick<Event, 'title' | 'description' | 'when' | 'conferencing' | 'participants' | 'id'> & {
    when:{
      startTime: number,
      endTime: number
    },
    conferencing:{
      details:{
        url: string
      }
    }
  }
type Props = EventWithDetails & {
  grantId: string,
  grandEmail: string
}

export default function MeetCard({ grantId, grandEmail, title, description, when, conferencing, participants, id }: Props) {


  const date = formedDate(when.startTime * 1000)
  const time = formedTime(when.startTime * 1000) + ' - ' + formedTime(when.endTime * 1000)

  const participantsCount = participants.length
  
  return (
    <Card>
      <CardContent>
        <div className="flex gap-4 justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-400">{description?.split('<br />⁠')[0]}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-0">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar width={16} height={16} />
                <span className="">{date}</span>
              </div>
              <span> · </span>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock1 width={16} height={16} />
                <span>{time}</span>
              </div>
              <span> · </span>
              <MeetCardShowParticipanButton participants={participants} />
            </div>
          </div>
          <MeetButtonDelete id={id} grantId={grantId} grandEmail={grandEmail} />
        </div>
      </CardContent>
      <CardFooter>
        <Link target="_blank" href={conferencing.details.url || '#'} className="flex items-center gap-2 text-sm font-medium cursor-pointer text-primary border-b-1 border-b-transparent hover:border-b-primary">
          <Video width={16} height={16} />
          <span>Unirse a la reunión</span>
        </Link>
      </CardFooter>
    </Card>
  )
}
