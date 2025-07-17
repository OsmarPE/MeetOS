import Link from "next/link";
import Container from "./Container";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import Logo from "@/assets/img/logo.webp";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AnimationContainer from "../landing/AnimacionContainer";
export default async function Header() {

    let avatar_url = null
    let auth = false
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    if (data?.user) {
        auth = true
        const { data: profile } = await supabase.from('profiles').select('id,avatar').eq('id', data?.user?.id).single()
        avatar_url = profile?.avatar ? `${process.env.NEXT_PUBLIC_BUCKET_URL}${profile?.avatar}` : ''

    }

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm">
            <AnimationContainer animation="fadeDown" delay={1}>
                <Container className="flex items-center justify-between h-20">
                    <Link href="/" className="text-primary font-medium flex items-center gap-2">
                        <Image src={Logo.src} width={24} height={24} alt="logo" />
                        MeetOS
                    </Link>
                    {
                        auth ? (
                            <div className="flex gap-2">
                                <Button asChild variant={'link'}>
                                    <Link href="/dashboard/events">
                                        Dashboard
                                    </Link>
                                </Button>
                                <Avatar className="uppercase">
                                    <AvatarFallback>
                                        {data.user?.user_metadata.name.charAt(0)}
                                    </AvatarFallback>
                                    {avatar_url && <AvatarImage src={avatar_url} alt="avatar" />}
                                </Avatar>
                            </div>
                        ) : (
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
                        )
                    }

                </Container>
            </AnimationContainer>
        </header>
    )
}
