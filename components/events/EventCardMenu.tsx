'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { EllipsisVertical, Link, Pencil, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface Props {
    url: string,
    id: number,
    grantId: string,
    grandEmail: string,
    eventId: string
}
export default function EventCardMenu({url, id, grantId, grandEmail, eventId}: Props) {

    const router = useRouter()

    const handleDelete = async () => {
        const response = await fetch(`/api/event/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                grantId,
                grandEmail,
                eventId
            })
        })

      
        

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
                <DropdownMenuItem disabled={!eventId}>
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
