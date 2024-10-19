import axios from 'axios';

export default async function callback(req, res) {
  const { code } = req.query;
  const client_id = '1201613667561639947';
  const client_secret = '0whqBiwUMt_qrXhXgYogOGTAp_jprQnn';
  const redirect_uri = 'https://slayerbot.vervel.app/api/callback';
  const tokenURL = 'https://discord.com/api/oauth2/token';
  const userURL = 'https://discord.com/api/users/@me';

  if (!code) {
    return res.redirect('/');
  }

  try {
    const tokenResponse = await axios.post(
      tokenURL,
      new URLSearchParams({
        client_id,
        client_secret,
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = tokenResponse.data;

    const userResponse = await axios.get(userURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const user = userResponse.data;

    // Kullanıcı bilgilerini localStorage'da saklayın
    res.redirect(`/?user=${encodeURIComponent(JSON.stringify(user))}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Authorization failed');
  }
      }
