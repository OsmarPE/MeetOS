import { nylas, nylasConfig } from '@/lib/nylas'

export async function GET(request: Request) {

    const authUrl = nylas.auth.urlForOAuth2({
        clientId: nylasConfig.clientId,
        redirectUri: nylasConfig.callbackUri,
      });
  
    

  return Response.redirect(authUrl);
}