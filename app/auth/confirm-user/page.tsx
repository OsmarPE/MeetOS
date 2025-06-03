'use client'
import Container from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { MailCheck } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {

  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    <Container className="max-w-md">
      <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
         <MailCheck className="size-4"/>
      </div>
         <h1 className="text-center text-2xl font-medium mt-6 mb-2">Cuenta confirmada</h1>
         <p className="text-center text-black/60 ">
         ¡Felicidades! Tu correo <span className='text-primary'>{email}</span> ha sido confirmada exitosamente. Ahora puedes disfrutar de todas las funciones y servicios que ofrecemos.
         </p>
         <Button asChild variant={'outline'} size={'lg'} className='mx-auto flex mt-6 w-max'>
            <Link href='/dashboard'>Ir al dashboard</Link>
         </Button>
    </Container>
  )
}
