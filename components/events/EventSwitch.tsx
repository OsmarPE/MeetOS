'use client'
import { useTransition } from 'react';
import { Switch } from '../ui/switch'
import { createClient } from '@/utils/supabase/client';
import { toast } from 'sonner';

interface Props {
  active: boolean
}

export default function EventSwitch({ active }: Props) {

    const [isPending, startTransition] = useTransition();

    const handleChangeStatus = async(value: boolean) => {

        startTransition( async() => {
            const supabase =  createClient()
            const { data: auth } = await supabase.auth.getUser() as { data: { user: { id: string } } | null }
            const { error } = await supabase.from('event').update({ active: value }).eq('profile_id', auth?.user?.id)

            if (!error) {
                toast.success(`Evento ${value ? 'activado' : 'desactivado'} correctamente`)
            }
            
        })
        
    }

  return (
        <Switch className='ml-auto mt-4' defaultChecked={active} onCheckedChange={handleChangeStatus} disabled={isPending} />
  )
}
