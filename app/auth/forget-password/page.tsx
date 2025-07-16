import Container from "@/components/layout/Container";
import { Calendar, LockIcon } from "lucide-react";
import FormLogin from "@/components/auth/FormLogin";
import FormForgerPassword from "@/components/auth/FormForgetPassword";
import ForgetPasswordMessage from "@/components/auth/ForgetPasswordMessage";
export default async function page({ params, searchParams }: { params: { id: string }; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const isSendEmail = (await searchParams).sendEmail


  if(isSendEmail) return <ForgetPasswordMessage />
    
  return (
    <Container className="max-w-xs">
      <div className="size-11 bg-primary rounded-full mx-auto text-white flex items-center justify-center">
         <LockIcon className="size-4"/>
      </div>
         <h1 className="text-center text-2xl font-medium mt-6">Recuperar contraseña</h1>
         <p className="text-center text-black/60 ">Ingresa tu correo electrónico para restaurar tu contraseña de tu cuenta</p>
         <FormForgerPassword />
    </Container>
  )
}
