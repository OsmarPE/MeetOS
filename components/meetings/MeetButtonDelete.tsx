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
import { useState } from "react";
import useRemoveMeeting from "@/hooks/use-remove-meeting";

export default function MeetButtonDelete({ id, grantId, grandEmail }: { id: string, grantId: string, grandEmail: string }) {


    const { handleWantRemoveMeetQuestion } = useRemoveMeeting()

    const handleDelete = () => {
        handleWantRemoveMeetQuestion({ id, grantId, grandEmail })
    }
    
    return (
        <Button variant="outline" size={'icon'} onClick={handleDelete} >
                <Trash width={20} height={20} />
        </Button>
    )
}
