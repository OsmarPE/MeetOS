import Message from "@/components/layout/Message";
import MeetCard from "@/components/meetings/MeetCard";
import MeetParticipants from "@/components/meetings/MeetParticipants";
import { Button } from "@/components/ui/button";
import { ParticipantsProvider } from "@/context/ParticipantsContext";
import { nylas } from "@/lib/nylas";
import { createClient } from "@/utils/supabase/server";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function page() {

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser() as any
  const { data: profile } = await supabase.from('profiles').select('grant_email, grant_id').eq('id', auth.user.id).single()

  const meetings = await nylas.events.list({
    identifier: profile?.grant_id ?? '',
    queryParams:{
      calendarId: profile?.grant_email ?? '',
    },
  })

  const grantId = profile?.grant_id ?? ''
  const grandEmail = profile?.grant_email ?? ''  

  return (
    <ParticipantsProvider>
      <div>
        <header className='flex gap-4 justify-between'>
          <div>
            <h2 className="text-2xl font-semibold">Reuniones</h2>
            <p className='text-sm text-gray-400'>Gestiona las reuniones ya programadas</p>
          </div>
            <Button size={'lg'} asChild>
              <Link href={`/dashboard/events/create-event`}>
                  <Plus width={20} height={20} />
                  <span>Añadir reunión</span>
              </Link>
            </Button>
        </header>
        { meetings.data.length === 0 &&(
            <Message className="mt-4">No hay reuniones programadas</Message>
        )}
        <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(460px,100%),1fr))]"> 
          {
            meetings.data.map((event: any) => (
              <MeetCard key={event.id} event={event} grantId={grantId} grandEmail={grandEmail} />
            ))
          }
        </div>
        <MeetParticipants />
      </div>
    </ParticipantsProvider>
  )
}
