'use client'
import { actionSignIn, actionSignUp } from "@/actions/auth";
import FormRegister from "@/components/auth/FormRegister";
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

 
  return (
    <Container className="max-w-xs">
      <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
         <Calendar className="size-4"/>
      </div>
         <h1 className="text-center text-2xl font-medium mt-6">Crear cuenta</h1>
         <p className="text-center text-black/60 ">Llena el formulario para crear tu cuenta</p>
         <FormRegister />
    </Container>
  )
}
