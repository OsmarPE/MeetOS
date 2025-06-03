'use client'
import React from 'react'
import { LogOut as LogOutIcon } from 'lucide-react'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogOut() {

    const router = useRouter()

    const handleLogOut = async () => {
        const supabase = await createClient()
        await supabase.auth.signOut()
        router.push('/')
    }
    
    return (
        <DropdownMenuItem onClick={handleLogOut}>
            <LogOutIcon width={16} height={16} />
            Cerrar sesión
        </DropdownMenuItem>
    )
}
