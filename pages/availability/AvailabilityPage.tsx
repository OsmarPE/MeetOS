import { createClient } from '@/utils/supabase/server'
import AvailabilityForm from '@/components/availability/AvailabilityForm'
import AvailabilityHeader from '@/components/availability/AvailabilityHeader'
import AvailabilityFormHeader from '@/components/availability/AvailabilityFormHeader'



export default async function AvailibilityPage() {

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser() as any
  const { data } = await supabase.from('availibility').select('*').eq('id_profile', auth.user.id)
  
  return (
    <div>
      <AvailabilityHeader />
      <div className='mt-6 max-w-[800px]'>
        <AvailabilityFormHeader />
        <AvailabilityForm data={data} />
      </div>
    </div>
  )
}
