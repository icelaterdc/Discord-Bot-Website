// pages/api/getUser.js

export default async function getUser(req, res) {
  const user = req.session.user; // Giriş yapan kullanıcı bilgilerini session'dan al
  if (!user) {
    return res.status(401).json({ error: "Lütfen giriş yapın." });
  }
  res.status(200).json(user);
}
