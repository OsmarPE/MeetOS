import Container from "@/components/layout/Container";
import { Calendar, LockIcon, Mail } from "lucide-react";
import FormForgerPassword from "@/components/auth/forget-password/FormForgetPassword";
import ForgetPasswordMessage from "@/components/auth/forget-password/ForgetPasswordMessage";
import CardInfo from "@/components/layout/CardInfo";
export default async function page({ params, searchParams }: { params: { id: string }; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const isSendEmail = (await searchParams).sendEmail


  if(isSendEmail) return <CardInfo icon={Mail} title='Hemos enviado un enlace de recuperación a tu correo electrónico.' variant="success" description='Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.' buttonHref='/auth/forget-password' variantButton='outline' buttonText='Regresar a inicio' />
    
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
