import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Calendar } from 'lucide-react'
import EventCardMenu from './EventCardMenu'
import Badge from '../layout/Badge'
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
    <Card className=' flex flex-col justify-between shadow-none'>
      <CardContent>
          <div className='flex items-center gap-4 justify-between mb-4'>
            <Calendar className='text-primary' width={22} height={22} />
            <EventCardMenu url={url} id={id} />
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
          <Switch className='ml-auto mt-4' defaultChecked={status} />

        </div>
      </CardFooter>
    </Card>
  )
}
