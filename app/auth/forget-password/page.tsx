import { Mail } from "lucide-react";
import CardInfo from "@/components/layout/CardInfo";
import ForgetPasswordPage from "@/pages/auth/ForgetPasswordPage";
export default async function page({ params, searchParams }: { params: { id: string }; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  const isSendEmail = (await searchParams).sendEmail

  if(isSendEmail) return <CardInfo icon={Mail} title='Hemos enviado un enlace de recuperación a tu correo electrónico.' variant="success" description='Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.' buttonHref='/auth/forget-password' variantButton='outline' buttonText='Regresar a inicio' />
    
  return <ForgetPasswordPage />
}
