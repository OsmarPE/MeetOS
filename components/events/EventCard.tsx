import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Calendar } from 'lucide-react'
import EventCardMenu from './EventCardMenu'
import Badge from '../layout/Badge'
import { Event } from '@/validations/Events'
import EventSwitch from './EventSwitch'
interface Props extends Event {
  grantId: string;
  grandEmail: string;
}

export default function EventCard({ id, title, description, duration, type, url, active, event_id, grantId, grandEmail }: Props) {

  
  return (
    <Card className=' flex flex-col justify-between shadow-none'>
      <CardContent>
          <div className='flex items-center gap-4 justify-between mb-4'>
            <Calendar className='text-primary' width={22} height={22} />
            {active && <EventCardMenu url={url} id={id} grandEmail={grandEmail} grantId={grantId} eventId={event_id} />}
          </div>
            <div className=''>
              <span className='text-sm text-primary space-y-1 inline-block'>{type}</span>
              <h3 className='text-lg font-medium'>{title}</h3>
              <p className='text-sm text-gray-500 text-pretty'>{description}</p>
            </div>

      </CardContent>
      <CardFooter>
        <div className='flex justify-between items-center w-full'>
                <Badge variant='outline' className='text-xs mt-4'>{duration} Minutos</Badge>
                <EventSwitch active={active} />

        </div>
      </CardFooter>
    </Card>
  )
}
