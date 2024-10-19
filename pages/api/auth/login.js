import { stringify } from 'querystring';

export default function handler(req, res) {
  const params = stringify({
    client_id: '1201613667561639947',
    redirect_uri: 'https://slayerbot.vercel.app/api/auth/callback',
    response_type: 'code',
    scope: 'identify email guilds guilds.join',
  });

  res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
}
