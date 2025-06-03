import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { actionSignIn } from "@/actions/auth";
import  Form  from "next/form";
import FormLogin from "@/components/auth/FormLogin";
export default function page() {
  return (
    <Container className="max-w-xs">
      <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
         <Calendar className="size-4"/>
      </div>
         <h1 className="text-center text-2xl font-medium mt-6">Iniciar sesión</h1>
         <p className="text-center text-black/60 ">Inicia sesión con tu cuenta de Google</p>
         <FormLogin />
    </Container>
  )
}
