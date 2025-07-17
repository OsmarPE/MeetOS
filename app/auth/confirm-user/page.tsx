'use client'
import CardInfo from '@/components/layout/CardInfo'
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
    <CardInfo
      icon={MailCheck}
      title='Cuenta confirmada'
      description='Ha sido confirmada exitomada tu cuenta, ahora puedes ingresar a tu cuenta para crear tus eventos'
      buttonHref={`/auth/login`}
      variantButton='outline'
      buttonText='Ir a inicio de sesión'
    />
  )
}
