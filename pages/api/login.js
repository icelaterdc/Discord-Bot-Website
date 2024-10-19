export default async function login(req, res) {
  const client_id = '1201613667561639947';
  const redirect_uri = 'https://slayerbot.vervel.app/api/callback';
  const scope = 'identify email guilds';
  const response_type = 'code';

  const discordAuthURL = `https://discord.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&response_type=${response_type}&scope=${encodeURIComponent(scope)}`;

  res.redirect(discordAuthURL);
}
