import React from 'react'
import { Button } from '../ui/button'
import {  Plus } from 'lucide-react'
import Link from 'next/link'

export default function EventHeader({ thereEvents = false }: { thereEvents?: boolean }) {
    return (
        <header className='flex gap-4 justify-between'>
            <div>
                <h2 className="text-2xl font-semibold">Eventos</h2>
                <p className='text-sm text-gray-400'>Gestiona los eventos de tu empresa</p>
            </div>
            {thereEvents && (
                <Button className='cursor-pointer' size={'lg'} asChild>
                    <Link href='/dashboard/create-event'>
                        <Plus width={20} height={20} />
                        <span>Añadir evento</span>
                    </Link>
                </Button>
            )}
        </header>
    )
}
