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
import { toast } from "sonner"
export default function EventCardMenu({url, id }: { url: string, id: number }) {

    const router = useRouter()

    const handleDelete = async () => {
        const response = await fetch(`/api/event/${id}`, {
            method: 'DELETE',
        })

        console.log(response);
        

        if (response.ok) {
            toast.success('Evento borrado correctamente')
        } else {
            toast.error('No se pudo borrar el evento')
        }
    }

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
                <DropdownMenuItem onClick={handleDelete}>
                  <Trash width={20} height={20} />
                  Borrar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
  )
}
