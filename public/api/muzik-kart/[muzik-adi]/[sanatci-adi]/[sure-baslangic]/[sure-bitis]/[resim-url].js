import { createCanvas, loadImage } from "canvas";

export default async function handler(req, res) {
  const { muzikKart } = req.query;

  if (!muzikKart || muzikKart.length < 5) {
    return res.status(400).json({ error: "Eksik parametreler" });
  }

  const [muzikAdi, sanatciAdi, sureBaslangic, sureBitis, resimUrl] = muzikKart;

  try {
    const width = 800;
    const height = 200;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Arka planı müzik resmine göre belirle
    const img = await loadImage(resimUrl);
    ctx.drawImage(img, 0, 0, width, height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, width, height);

    // Başlık
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.fillText(muzikAdi, 20, 40);

    // Sanatçı
    ctx.font = "18px Arial";
    ctx.fillText(sanatciAdi, 20, 70);

    // Süre çubuğu
    ctx.fillStyle = "gray";
    ctx.fillRect(20, 100, width - 40, 10);
    ctx.fillStyle = "white";
    const progress =
      (parseFloat(sureBaslangic) / parseFloat(sureBitis)) * (width - 40);
    ctx.fillRect(20, 100, progress, 10);

    // Süreler
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText(sureBaslangic, 20, 130);
    ctx.fillText(sureBitis, width - 60, 130);

    res.setHeader("Content-Type", "image/png");
    res.send(canvas.toBuffer());
  } catch (error) {
    res.status(500).json({ error: "Görsel oluşturulamadı" });
  }
}
