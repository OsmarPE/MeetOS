import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { nylas } from '@/lib/nylas'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const eventId = searchParams.get('eventId') as string
  const grantId = searchParams.get('grantId') as string
  const grandEmail = searchParams.get('grandEmail') as string

  const { success, message } = await deleteEvent(grantId, eventId, grandEmail)
  
  if (!success) {
   return redirect('/dashboard/meetings?error=' + message)
  }

  redirect('/dashboard/meetings')
}

async function deleteEvent(grantId: string, eventId: string, grandEmail: string): Promise<{ success: boolean, message: string }> {
  try {
    await nylas.events.destroy({ 
      identifier: grantId,
      eventId: eventId,
      queryParams:{
        calendarId: grandEmail,
      },
    })

    return { success: true, message: 'Evento eliminado correctamente' }
    
  } catch (error) {
    
    return { success: false, message: 'No se pudo eliminar el evento, intenta nuevamente' }
  }
}