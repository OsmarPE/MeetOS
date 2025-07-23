import { nylas } from "@/lib/nylas"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath, revalidateTag } from "next/cache"

export async function DELETE(request: Request,{ params }: { params: Promise<{id:string}>}) {

    const { id } = await params
    const { grantId, grandEmail } = await request.json()
 
    const supabase = await createClient()
    const { status } = await supabase.from('event').delete().eq('id', id)
   
    if (status !== 200) return Response.json({
        message: 'No se pudo borrar el evento'
    })
    try {
        const dataNylas = await nylas.events.destroy({ 
          identifier: grantId,
          eventId: id,
          queryParams:{
            calendarId: grandEmail,
          },
        })
    
        
        
    } catch (error) {
        
    }
    
    // revalidateTag('events')

    return Response.json({
        message: 'Evento borrado correctamente'
    })
}