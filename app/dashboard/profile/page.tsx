import FormSubmit from '@/components/auth/FormSubmit'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UploadCloud } from 'lucide-react'
import React from 'react'

export default async function page() {
  return (
    <div className='max-w-2xl p-4'>
          <h2 className="text-xl font-medium">Informacion de tu cuenta</h2>
          <p className='text-sm text-gray-400'>Gestiona tus datos de perfil</p>
          <div className='mt-8'>
            <h3 className='text-sm text-muted-foreground mb-2'>Perfil</h3>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <div className='size-14 rounded-full grid place-content-center bg-primary/5 text-primary'>
                  OS
                </div>
                <div className='leading-0.5'>  
                  <p className='font-medium text-base'>Osmar Perera</p>
                  <span className='text-sm text-muted-foreground'>osmar.perera@gmail.com</span>
                </div>
              </div>
              <Button size={'sm'} variant={'outline'} className='flex items-center gap-2'>
                <UploadCloud width={4} height={4} />
                Subir foto
              </Button>
            </div>
            <div className='mt-4 space-y-6'>
                <div className='flex items-center gap-4 justify-between'>
                  <Label htmlFor="name">Nombre</Label>
                  <Input type="text" id="name" name="name" placeholder="Nombre" className="w-full max-w-sm" />
                </div>
                <div className='flex items-center gap-4 justify-between'>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input type="text" id="email" name="email" placeholder="Correo electrónico" className="w-full max-w-sm" />
                </div>
                <div className='flex items-center gap-4 justify-between'>
                  <Label htmlFor="password">Contraseña</Label>
                  <Input type="text" id="password" name="password" placeholder="Contraseña" className="w-full max-w-sm" />
                </div>
            </div>
            <FormSubmit className='mt-8 ml-auto flex' loading={false}>Guardar</FormSubmit>
          </div>
    </div>
  )
}
