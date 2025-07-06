import { createClient } from "@/utils/supabase/server"
import { revalidatePath, revalidateTag } from "next/cache"

export async function DELETE(request: Request,{ params }: { params: Promise<{id:string}>}) {

    const { id } = await params

    const supabase = await createClient()
    const { status, data } = await supabase.from('event').delete().eq('id', id)

    console.log(data)
    

    if (status !== 200) return Response.json({
        message: 'No se pudo borrar el evento'
    })


    revalidateTag('events')

    return Response.json({
        message: 'Evento borrado correctamente'
    })
}