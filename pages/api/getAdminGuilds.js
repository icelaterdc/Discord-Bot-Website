// pages/api/getAdminGuilds.js

export default async function getAdminGuilds(req, res) {
  const user = req.session.user; // Kullanıcı verilerini al
  if (!user) {
    return res.status(401).json({ error: "Lütfen giriş yapın." });
  }

  const guilds = await fetchUserAdminGuilds(user); // Kullanıcının yönetici olduğu sunucuları getir

  res.status(200).json(guilds);
}

// Örnek olarak bu fonksiyonu ekliyorum, kendi bot API'ne göre bunu doldurman gerekecek
async function fetchUserAdminGuilds(user) {
  // Burada Discord API çağrısı yapıp kullanıcının yönetici olduğu sunucuları döndür
  return [
    {
      id: "1234567890",
      name: "Örnek Sunucu",
      icon: "https://example.com/icon.png",
      owner_id: user.id,
    },
  ];
}
