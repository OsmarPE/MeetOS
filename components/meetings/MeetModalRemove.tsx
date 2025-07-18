'use client'
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import useRemoveMeeting from "@/hooks/use-remove-meeting";
import { useState } from "react";
import FormSubmit from "../auth/FormSubmit";

export default function MeetModalRemove() {

    const { meet, showModal, closeModal } = useRemoveMeeting()
    const { id, grantId, grandEmail } = meet

    const [loading, setLoading] = useState(false)

    const handleDelete = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/meeting/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    grandEmail: grandEmail,
                    grantId: grantId
                })
            })


            const data = await res.json()

            if (!data.success) {
                toast.error(data.message)
                return
            }

            toast.success(data.message)
        } catch (error) {
            toast.error('No se pudo borrar el evento')
        } finally {
            setLoading(false)
            closeModal()
        }
    }

    return (
        <Dialog open={showModal} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Desea borrar este evento?</DialogTitle>
                    <DialogDescription>
                        Esta apunto de borrar el evento que tiene programado
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4 gap-4">
                    <DialogClose asChild>
                        <Button variant="outline" onClick={closeModal}>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <FormSubmit variant="destructive" className="h-9" loading={loading} onClick={handleDelete}>
                        <Trash width={20} height={20} />
                        Eliminar
                    </FormSubmit>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}
