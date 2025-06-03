import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Settings, User } from "lucide-react"
import LogOut from "./dashboard/LogOut"

interface Props{
    name: string
}

export default function Profile({name}: Props) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
                <Avatar className="uppercase">
                    <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
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
