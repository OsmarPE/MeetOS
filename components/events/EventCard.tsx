import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Calendar } from 'lucide-react'
import EventCardMenu from './EventCardMenu'
interface Props {
  event: {
    id: number
    title: string
    description: string
    duration: string
    type: string
    url: string,
    status: boolean
  }
}

export default function EventCard({ event }: Props) {

  const { id, title, description, duration, type, url, status } = event

  return (
    <Card className='flex gap-4 justify-between'>
      <CardContent>
        <div className='flex gap-4 justify-between'>
          <div className='flex gap-4 items-center'>
            <div className='size-12 grid place-items-center rounded bg-primary/10 text-primary'>
              <Calendar width={20} height={20} />
            </div>
            <div>
              <h3 className='text-lg font-medium'>{title}</h3>
              <p className='text-sm text-gray-400'>{duration} Minutos</p>
            </div>
          </div>
          <div>
           <EventCardMenu url={url} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Switch className='ml-auto mt-4' defaultChecked={status} />
      </CardFooter>
    </Card>
  )
}
