import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


export default function InvalideTokenResetPassword() {
  return (
    <div className='border text-center border-gray-200 rounded-lg p-6 max-w-md'>
            <div className='mb-4 flex mx-auto items-center text-d justify-center size-12 rounded-full border border-gray-200'>
                <CircleAlert className='size-5'/>
            </div>
            <h1 className='text-lg font-medium leading-6'>Token invalido</h1>
            <p className='text-black/60 text-sm mt-1'>Manda nuevamente un correo para restablecer tu contraseña</p>
            <Button variant={'outline'} asChild>
                <Link href='/auth/forget-password' className='text-primary mt-6  font-medium w-full'>
                    Restablecer contraseña
                </Link>
            </Button>
        </div>
  )
}
