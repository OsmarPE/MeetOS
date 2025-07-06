
import { createClient } from "@/utils/supabase/server"


export const GET = async(request: Request,{ params }: { params: Promise<{id:string}>}) => {

    const { id } = await params
    
    
    return Response.json({
        message: id
    })
}