export default async function login(req, res) {
  const client_id = '1201613667561639947'; // Discord uygulama client ID
  const redirect_uri = 'https://slayerbot.vervel.app/api/callback'; // Yönlendirme URI
  const scope = 'identify email guilds guilds.join openid'; // Genişletilmiş yetkiler
  const response_type = 'code';

  // Discord yetkilendirme URL'si
  const discordAuthURL = `https://discord.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&response_type=${response_type}&scope=${encodeURIComponent(scope)}`;

  // Kullanıcıyı Discord yetkilendirme sayfasına yönlendirme
  res.redirect(discordAuthURL);
}
