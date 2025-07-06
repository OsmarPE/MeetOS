import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    try {
     
        const response = await fetch('https://api.us.nylas.com/v3/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NYLAS_API_KEY ?? ''}`,
            },
            body: JSON.stringify({
                client_id: process.env.NYLAS_CLIENT_ID,
                client_secret: process.env.NYLAS_API_KEY,
                code,
                grant_type: 'authorization_code',
                redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/nylas/zoom`,
            }),
        })
        

        const data = await response.json()

        const supabase = await createClient()
        const { data: auth } = await supabase.auth.getUser() as any
        await supabase.from('profiles').update({
            conf_grant_id: data.grant_id,
        }).eq('id', auth.user.id)
        
    } catch (error) {
        console.log(error);
    }

    // redirect the user to an error page with some instructions
     redirect('/dashboard/zoom')
}