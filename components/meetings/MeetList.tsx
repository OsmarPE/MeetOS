import { Event } from "nylas";
import MeetCard from "./MeetCard";


type Props = {
    grantId?: string,
    grandEmail?: string
    meetings: any[]
}


export default function MeetList({ grantId, grandEmail, meetings }: Props) {
  return (
    <div className="mt-8 grid gap-4 grid-cols-[repeat(auto-fill,minmax(min(460px,100%),1fr))]">
      {meetings.map((event: any) => (
        <MeetCard
          key={event.id}
          title={event.title}
          description={event.description}
          when={event.when}
          conferencing={event.conferencing}
          participants={event.participants}
          id={event.id}
          grantId={grantId ?? ''}
          grandEmail={grandEmail ?? ''}
        />
      ))}
    </div>
  );
}
