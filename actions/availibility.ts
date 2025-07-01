'use server'

import { createClient } from "@/utils/supabase/server"
import { Availibility } from "@/validations/Availibility"

export async function actionSaveAvailibility(state: any, formData: FormData): Promise<{message: string, status: number}> {

  const data = Object.fromEntries(formData.entries())
  const dataToJSON = JSON.parse(data.availibilities as string) 
  const availibilities = dataToJSON as Availibility[]

  const supabase = await createClient()
  
  const { status } = await supabase.from('availibility').upsert(availibilities)

  if (status !== 200) {
    return {
      message: 'No se pudo guardar los horarios',
      status
    }
  }
  
  return {
    message: 'Horarios actualizados correctamente',
    status: 200
  }
  

}