import axios from 'axios';

const CLIENT_ID = '1201613667561639947';
const CLIENT_SECRET = '0whqBiwUMt_qrXhXgYogOGTAp_jprQnn';
const REDIRECT_URI = 'https://slayerbot.vercel.app/api/auth/discord';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;

    if (code) {
      try {
        const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', 
          new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI,
            scope: 'identify email guilds guilds.join',
          }), 
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const { access_token, token_type } = tokenResponse.data;

        const userResponse = await axios.get('https://discord.com/api/users/@me', {
          headers: {
            authorization: `${token_type} ${access_token}`,
          },
        });

        const userData = userResponse.data;

        res.status(200).json(userData);
      } catch (error) {
        console.error('Error during Discord authentication:', error);
        res.status(500).json({ error: 'Authentication failed' });
      }
    } else {
      res.status(400).json({ error: 'No code provided' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
