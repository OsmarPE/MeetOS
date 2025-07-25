import ProfileAccount from '@/components/profile/ProfileAccount'
import ProfileAccountsList from '@/components/profile/ProfileAccountsList'
import ProfileBody from '@/components/profile/ProfileBody'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/server'
import { UsersRound, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function ProfilePage() {

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser() as any
  const { data: profile } = await supabase.from('profiles').select('name, email, id, avatar,conf_grant_id').eq('id', auth.user.id).single()
  
  const zoomURL = `https://api.us.nylas.com/v3/connect/auth?client_id=${process.env.NYLAS_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL_ZOOM}&response_type=code&access_type=offline&provider=zoom`
  
  const conf_grant_id = profile?.conf_grant_id

  return (
    <div className='max-w-2xl p-4'>
      <div className='mb-6'>
            <h2 className="text-xl font-medium">Informacion de tu cuenta</h2>
            <p className='text-sm text-gray-400'>Gestiona tus datos de perfil</p>
            <ProfileBody profile={profile} />
      </div>
      <div>
        <h2 className="text-xl font-medium">Tus cuentas</h2>
        <p className='text-sm text-gray-400'>Gestiona tus cuentas de correo</p>
        
        <ProfileAccountsList className='mt-4'>
          <ProfileAccount 
            conf_grant_id={conf_grant_id}
            href={zoomURL}
            icon={Video}
            title='Zoom Meeting'
          />
          <ProfileAccount 
            icon={UsersRound}
            href='https://nylas.com/connect'
            title='Teams Meeting'
          />
        </ProfileAccountsList>
      </div>
    </div>
  )
}
