import { createClient } from "@/utils/supabase/server"
import { Button } from "../ui/button"
import Link from "next/link"

export default async function HeroButton() {

    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    const href = data?.user ? "/dashboard/events" : "/auth/login"
    const text = data?.user ? "Ir a dashboard" : "Empezar ahora"

    return (

        <Button size={'lg'} className="mt-8 shadow-[0_30px_30px_-12px__rgba(21,127,48,0.6)]" asChild>
           <Link href={href}>
                { text }
            </Link>
        </Button>

    )
}
