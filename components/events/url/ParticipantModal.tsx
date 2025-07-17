import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Users } from 'lucide-react'
import React from 'react'

interface Props {
    open: boolean
    setopen: (value: boolean) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ParticipantModal({ open, setopen, handleSubmit, handleChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={setopen}>
                        <DialogTrigger asChild>
                            <Button variant={'outline'} size={'icon'}>
                                <Plus width={20} height={20} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className='flex gap-2 items-center'>
                                    <Users width={18} height={18} />
                                    Agregar participante
                                </DialogTitle>
                                <DialogDescription>
                                    Añade una invitación a un participante para que pueda participar en la reunión.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit}>
                                <div className='space-y-4'>
                                    <div>
                                        <Label className='inline-block mb-1' htmlFor='name'> Nombre </Label>
                                        <Input onChange={handleChange} type='text' id='name' name='name' placeholder='Ej. Mario Castillo' className='w-full' />
                                    </div>
                                    <div>
                                        <Label className='inline-block mb-1' htmlFor='email'> Correo electronico</Label>
                                        <Input onChange={handleChange} type='email' id='email' name='email' placeholder='exemple@gmail.com' className='w-full' />
                                    </div>
                                </div>
                                <div className='flex justify-end gap-4 mt-8'>
                                    <Button type='button' variant={'outline'} className='' onClick={() => setopen(false)}>Cancelar</Button>
                                    <Button className=''>Agregar</Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
  )
}
