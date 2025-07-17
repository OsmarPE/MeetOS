import { CircleOff } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function EventPlaceholderNewEvent() {
  return (
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
  )
}
