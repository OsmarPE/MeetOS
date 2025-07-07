
import EventCard from '@/components/events/EventCard'
import { Button } from '@/components/ui/button'
import { nylas } from '@/lib/nylas'
import { createClient } from '@/utils/supabase/server'
import { CircleOff, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function page() {

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser() as any
    const { data:user } = await supabase.from('profiles').select('grant_id').eq('id', auth.user.id).single()
    const { data } = await supabase.from('event').select('*').eq('profile_id', auth.user.id)

  return (
    <div>
      <header className='flex gap-4 justify-between'>
        <div>
          <h2 className="text-2xl font-semibold">Eventos</h2>
          <p className='text-sm text-gray-400'>Gestiona los eventos de tu empresa</p>
        </div>
        {data?.length !== 0 && <Button className='cursor-pointer' size={'lg'} asChild>
          <Link href='/dashboard/create-event'>
            <Plus width={20} height={20} />
            <span>Añadir evento</span>
          </Link>
        </Button>}
      </header>

      {data?.length === 0 ?
        (
          <div className="mt-4 flex items-center justify-center min-h-[460px]">
            <div className='text-center'>
              <div className='size-18 rounded-full grid place-content-center bg-primary/5 text-primary mx-auto mb-4'>
                <CircleOff />
              </div>
              <h3 className='font-semibold text-xl'>Sin eventos</h3>
              <p className='text-gray-400 text-sm mt-1'>Aun no tienes eventos registrados.</p>
              <Button size={'lg'} className='cursor-pointer mt-10'>
                <Link href={`/dashboard/create-event`}>
                  <span>Añadir evento</span>
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] mt-6'>
            {
              data?.map((event: any) => (
                <EventCard key={event.id} event={event} grandEmail={auth.user.email} grantId={user?.grant_id} />
              ))
            }
          </div>

        )

      }
    </div>
  )
}
