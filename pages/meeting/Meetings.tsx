import Message from "@/components/layout/Message";
import MeetHeader from "@/components/meetings/MeetHeader";
import MeetList from "@/components/meetings/MeetList";
import MeetModalRemove from "@/components/meetings/MeetModalRemove";
import MeetParticipants from "@/components/meetings/MeetParticipants";
import { MeetingRemoveEventProvider } from "@/context/MeetingRemoveEvent";
import { ParticipantsProvider } from "@/context/ParticipantsContext";
import { nylas } from "@/lib/nylas";
import { createClient } from "@/utils/supabase/server";

export default async function Meetings() {
  const supabase = await createClient();
  const { data: auth } = (await supabase.auth.getUser()) as any;
  const { data: profile } = await supabase
    .from("profiles")
    .select("grant_email, grant_id")
    .eq("id", auth.user.id)
    .single();

  const meetings = await nylas.events.list({
    identifier: profile?.grant_id ?? "",
    queryParams: {
      calendarId: profile?.grant_email ?? "",
    },
  });

  const grantId = profile?.grant_id ?? "";
  const grandEmail = profile?.grant_email ?? "";

  return (
    <ParticipantsProvider>
      <MeetingRemoveEventProvider>
        <MeetHeader />
        {meetings.data.length !== 0 ? (
          <MeetList
            meetings={meetings.data}
            grantId={grantId}
            grandEmail={grandEmail}
          />
        ) : (
          <Message className="mt-4">No hay reuniones programadas</Message>
        )}
        <MeetParticipants />
        <MeetModalRemove />
      </MeetingRemoveEventProvider>
    </ParticipantsProvider>
  );
}
