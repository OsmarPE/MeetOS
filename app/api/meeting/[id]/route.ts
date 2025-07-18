
import { nylas } from "@/lib/nylas"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"


export const GET = async(request: Request,{ params }: { params: Promise<{id:string}>}) => {

    const { id } = await params
    
    
    return Response.json({
        message: id
    })
}



export async function DELETE(request: Request,{ params }: { params: Promise<{id:string}>}) {

    const { id } = await params
    const { grantId, grandEmail } = await request.json()
 
    const supabase = await createClient()
    const { status } = await supabase.from('event').delete().eq('id', id)
   
 
    try {
        const dataNylas = await nylas.events.destroy({ 
          identifier: grantId,
          eventId: id,
          queryParams:{
            calendarId: grandEmail,
          },
        })

        revalidatePath('/dashboard/meetings','page')
        revalidatePath('/dashboard')
    
        return Response.json({
            message: 'Evento borrado correctamente',
            success: true,
        })

        
    } catch (error) {
        
        return Response.json({
            message: 'No se pudo borrar el evento programado',
            success: false
        })
    }
    



}