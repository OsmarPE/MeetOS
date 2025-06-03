'use client'
import { actionSignIn, actionSignUp } from "@/actions/auth";
import FormSubmit from "@/components/auth/FormSubmit";
import Container from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
}

export default function page() {

  const [state, formAction, pending] = useActionState(actionSignUp, initialState)
  const { name, email, password, confirmPassword, errors } = state

  return (
    <Container className="max-w-xs">
      <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
         <Calendar className="size-4"/>
      </div>
         <h1 className="text-center text-2xl font-medium mt-6">Crear cuenta</h1>
         <p className="text-center text-black/60 ">Llena el formulario para crear tu cuenta</p>
         <form className="mt-8" action={formAction}>
            <div className="space-y-4">
              <div>
                  <Label htmlFor="name" className="mb-2 inline-block">Nombre</Label>
                  <Input type="name" id="name" name="name" placeholder="Ej. John Doe" defaultValue={name?.toString()} />
                  {errors?.name && <p className="text-destructive font-medium text-xs mt-2">{errors.name}</p>}
              </div>
              <div>
                  <Label htmlFor="email" className="mb-2 inline-block">Correo electrónico</Label>
                  <Input type="email" id="email" name="email" placeholder="Correo electrónico" defaultValue={email?.toString()} />
                  {errors?.email && <p className="text-destructive font-medium text-xs mt-2">{errors.email}</p>}
              </div>
              <div>
                  <Label htmlFor="password" className="mb-2 inline-block">Nueva Contraseña</Label>
                  <Input type="password" id="password" name="password" placeholder="Contraseña" defaultValue={password?.toString()} />
                  {errors?.password && <p className="text-destructive font-medium text-xs mt-2">{errors.password}</p>}
              </div>
              <div>
                  <Label htmlFor="confirm-password" className="mb-2 inline-block">Repite la contraseña</Label>
                  <Input type="password" id="confirm-password" name="confirmPassword" placeholder="Contraseña" defaultValue={confirmPassword?.toString()} />
                  {errors?.confirmPassword && <p className="text-destructive font-medium text-xs mt-2">{errors.confirmPassword}</p>}
              </div>
            </div>
            <FormSubmit className="w-full mt-8" loading={pending}>Crear cuenta</FormSubmit>
            <p className="text-sm text-black/60 mt-4 text-center">Ya tienes una cuenta ? <Link href="/auth/login" className="text-primary hover:underline">Inicia sesión</Link></p>
         </form>
    </Container>
  )
}
