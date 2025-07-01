'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { Calendar, EllipsisVertical, Link, Pencil, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
export default function EventCardMenu({url}:{url:string}) {

    const router = useRouter()

  return (
     <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button  variant={'ghost'}>
                  <EllipsisVertical width={20} height={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" >
                 <DropdownMenuItem onClick={() => router.push(`/dashboard/events/${url}`)}>
                    <Link width={20} height={20} />
                    Calendario
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Pencil width={20} height={20} />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash width={20} height={20} />
                  Borrar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
  )
}
