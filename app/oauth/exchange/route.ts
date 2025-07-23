import { nylas, nylasConfig } from '@/lib/nylas'
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
export async function GET(request: Request) {
  const search = new URL(request.url)
  const code = search.searchParams.get('code') ?? ''
4
  
  try {
    const data = await nylas.auth.exchangeCodeForToken({
      clientSecret: nylasConfig.apiKey,
      clientId: nylasConfig.clientId, // Note this is *different* from your API key
      redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
      code,
    });
    
    
    const { grantId, email } = data;

    // You'll use this grantId to make API calls to Nylas perform actions on
    // behalf of this account. Store this in a database, associated with a user
    const supabase = await createClient()
    const { data: auth } = await supabase.auth.getUser() as any


    await supabase.from('profiles').update({
      grant_id: grantId,
      grant_email: email,
    }).eq('id', auth.user.id)
    

    // This depends on implementation. If the browser is hitting this endpoint
    // you probably want to use res.redirect('/some-successful-frontend-url')

  } catch (error) {
    
    
    return Response.json({
      error: 'code invalido'
    });
  }

  redirect('/nylas-log-in?status=success')
 
}