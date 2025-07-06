'use client'
import React, { useActionState } from 'react'
import { Button } from '../ui/button'
import { UploadCloud } from 'lucide-react'
import { toast } from 'sonner'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import FormSubmit from '../auth/FormSubmit'
import { actionUpdateProfile } from '@/actions/profile'

export default function ProfileBody({profile}: {profile: any}) {

    const fileRef = React.useRef<HTMLInputElement>(null)
    const [image, setImage] = React.useState({
        name: '',
        type: '',
        url: '',
    })

    const handleUploadImage = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null
        
        if (!file) return

        if (!(file.type.startsWith('image/'))) {
            toast.error('El archivo debe ser una imagen')
            return
        }
        
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImage({
                name: file.name,
                type: file.type,
                url: reader.result as string,
            })
        }
        
    }

      const [state, formAction, pending] = useActionState(actionUpdateProfile, {
        name: profile?.name ?? '',
        email: profile?.email ?? '',
        password: ''
      })

    const { name, url } = image

    const avatarURL = profile?.avatar_url ? `${process.env.NEXT_PUBLIC_BUCKET_URL}${profile?.avatar_url}` : url
    const showImage = url || profile?.avatar_url

    return (
        <>
         <form action={formAction} className='mt-8'>
            <h3 className='text-sm text-muted-foreground mb-2'>Perfil</h3>
              <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <div className='overflow-hidden size-14  rounded-full grid place-content-center bg-primary/5 text-primary relative'>
                  OS
                { showImage && <img src={avatarURL} alt="avatar" className="absolute inset-0 object-cover" />}</div>
                <div className='leading-0.5'>  
                  <p className='font-medium text-base'>{profile?.name}</p>
                  <span className='text-sm text-muted-foreground'>{profile?.email}</span>
                </div>
              </div>
                <div className='flex items-center gap-4'>
                  {name && <p className='text-xs text-muted-foreground'>{ name }</p>}
                  <Button type='button' onClick={handleUploadImage} size={'sm'} variant={'outline'} className='flex items-center gap-2'>
                      <UploadCloud width={4} height={4} />
                      Subir foto
                  </Button>
                </div>

                <input ref={fileRef} onChange={handleFile} type="file" name="file" className="hidden" />
            </div>
            <div className='mt-4 space-y-6'>
                <div className='flex items-center gap-4 justify-between'>
                  <Label htmlFor="name">Nombre</Label>
                  <Input type="text" id="name" name="name" placeholder="Nombre" className="w-full max-w-sm" defaultValue={state?.name} />
                </div>
                <div className='flex items-center gap-4 justify-between'>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input type="text" id="email" name="email" placeholder="Correo electrónico" className="w-full max-w-sm" defaultValue={state?.email} disabled />
                </div>
                <div className='flex items-center gap-4 justify-between'>
                  <Label htmlFor="password">Contraseña</Label>
                  <Input type="text" id="password" name="password" placeholder="Contraseña" className="w-full max-w-sm" defaultValue={state?.password} />
                </div>
            </div>
            <FormSubmit className='mt-8 ml-auto flex' loading={pending}>Guardar</FormSubmit>
          </form>
      
        </>
    )
}
