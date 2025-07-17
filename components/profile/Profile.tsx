import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Settings, User } from "lucide-react"
import LogOut from "../dashboard/LogOut"
import { createClient } from "@/utils/supabase/server"

interface Props{
    name: string
}

export default async function Profile({name}: Props) {

    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('avatar').eq('id', auth?.user?.id).single()

    const avatarURL = profile?.avatar ? `${process.env.NEXT_PUBLIC_BUCKET_URL}${profile?.avatar}` : ''


    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
                <Avatar className="uppercase">
                    <AvatarFallback>
                        {name.slice(0, 2)}
                    </AvatarFallback>
                   {avatarURL && <AvatarImage src={avatarURL} alt="avatar" />}
                </Avatar>
                <ChevronDown width={16} height={16} className="text-gray-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Settings width={16} height={16} />
                    Configuración
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <User width={16} height={16} />
                    Mi cuenta
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <LogOut />
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
