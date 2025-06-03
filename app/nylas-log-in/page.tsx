import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LogInGoogle({ params, searchParams }: Props) {

    const { status = '' } = await searchParams

    if (status === 'success') return (

        <div className="fixed inset-0 bg-white/80 z-10 flex items-center justify-center">
            <div className="w-[90%] max-w-[460px] bg-white shadow rounded-2xl p-4 border border-gray-10">
            <div className=" text-center p-4">
                <div className="size-18 rounded-full grid place-content-center bg-primary/5 text-primary mx-auto mb-4">
                    <Check width={30} height={30} />
                </div>
                <h2 className="font-semibold text-xl">Calendario sincronizado</h2>
                <p className="text-sm mt-1 text-gray-400 my-6">
                    Tu calendario se ha sincronizado con MeetOs. Ahora puedes gestionar y crear eventos ahora todo desde un mismo lugar.
                </p>
                <Button variant={'outline'} className="" size={'lg'} asChild>
                    <Link href={`/dashboard`}>
                        Ver eventos
                    </Link>
                </Button>
            </div>
            </div>
        </div>
    )

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser() as any
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', auth.user.id).single()

    if (!profile || (profile && profile.grant_id)) {
        redirect(`/dashboard`)
    }


    return (
        <div className="fixed inset-0 bg-white/80 z-10 flex items-center justify-center">
            <div className="w-[90%] max-w-[460px] bg-white shadow rounded-2xl p-4 border border-gray-10">
                <div className="p-4 bg-primary/5 text-primary rounded-xl">

                    <h2 className="font-semibold text-lg">Bienvenido</h2>
                    <p className="text-sm mt-1">
                        Conecta tu cuenta de Google para ver y gestionar todos tus eventos del calendario en un solo lugar.</p>
                </div>
                <Button className="w-full mt-4" size={'lg'} asChild>
                    <Link href="/nylas/auth">
                        <Calendar className="" />
                        Acceder a mi calendario
                    </Link>
                </Button>
            </div>
        </div>
    )
}
