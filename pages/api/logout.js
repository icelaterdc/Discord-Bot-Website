export default function logout(req, res) {
  // Kullanıcıyı çıkış yaparken localStorage'dan temizleyin
  res.status(200).json({ message: 'Logout successful' });
}
