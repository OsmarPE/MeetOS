import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "lucide-react"
import { Button } from "../ui/button"
import Google from "@/assets/img/Google"
import Link from "next/link"
export default function LogInNylas() {
    
    return (
        <Dialog open>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex gap-2 items-center">
                        <Calendar className="size-4"/>
                        Conecta tu calendario</DialogTitle>
                    <DialogDescription>
                        Conecta tu cuenta de Nylas para ver y gestionar todos tus eventos del calendario a traves de tu cuenta de google.
                    </DialogDescription>
                    <DialogFooter className="mt-4">
                        <Button  size={'lg'} className="w-full" asChild>
                            <Link href="/nylas/auth" >
                                <Google className="size-4"/>
                                Acceder a mi calendario
                            </Link>
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
