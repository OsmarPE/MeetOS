import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Calendar } from 'lucide-react'
export default function EventCard() {
  return (
     <Card className='flex gap-4 justify-between'>
              <CardContent>
                <div className='flex gap-4 items-center'>
                  <div className='size-12 grid place-items-center rounded bg-primary/10 text-primary'>
                    <Calendar width={20} height={20} />
                  </div>
                  <div>
                    <h3 className='text-lg font-medium'>Meet Osmar Perera</h3>
                    <p className='text-sm text-gray-400'>30 Minutos</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                  <Switch className='ml-auto mt-4' />
              </CardFooter>
            </Card>
  )
}
