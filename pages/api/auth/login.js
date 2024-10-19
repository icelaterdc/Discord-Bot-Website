// pages/api/auth/login.js
import { stringify } from 'querystring';

export default function handler(req, res) {
  const params = stringify({
    client_id: '1201613667561639947',
    redirect_uri: 'http://slayerbot.vervel.app/api/auth/callback',
    response_type: 'code',
    scope: 'identify email guilds guilds.join',
  });

  res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
}

// pages/api/auth/callback.js
import { stringify } from 'querystring';

export default async function handler(req, res) {
  const { code } = req.query;

  if (code) {
    try {
      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: stringify({
          client_id: '1201613667561639947',
          client_secret: '0whqBiwUMt_qrXhXgYogOGTAp_jprQnn',
          grant_type: 'authorization_code',
          code,
          redirect_uri: 'http://localhost:3000/api/auth/callback',
        }),
      });

      const tokenData = await tokenResponse.json();

      const userResponse = await fetch('https://discord.com/api/users/@me', {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });

      const userData = await userResponse.json();

      // Normally, you'd want to store this in a database
      // For simplicity, we'll just send it back to the client
      res.redirect(`/?user=${JSON.stringify(userData)}`);
    } catch (error) {
      console.error('Error during Discord authentication:', error);
      res.redirect('/?error=authentication_failed');
    }
  } else {
    res.redirect('/?error=no_code_provided');
  }
}
