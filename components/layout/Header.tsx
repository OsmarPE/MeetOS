import Link from "next/link";
import Container from "./Container";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import  Logo  from "@/assets/img/logo.png";
import Image from "next/image";
export default function Header() {
    return (
        <header>
            <Container className="flex items-center justify-between h-20">
                <Link href="/" className="text-primary font-medium flex items-center gap-2">
                    <Image src={Logo.src} width={24} height={24} alt="logo" />
                    MeetOS
                </Link>
                <div className="flex gap-4">
                    <Button asChild variant={'link'}>
                        <Link href="/auth/register">
                            Registrarse
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/auth/login">
                            Iniciar sesión
                        </Link>
                    </Button>
                </div>
            </Container>
        </header>
    )
}
