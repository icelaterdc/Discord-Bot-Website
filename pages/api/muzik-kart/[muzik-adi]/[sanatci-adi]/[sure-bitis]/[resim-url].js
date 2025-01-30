import { createCanvas, loadImage } from "canvas";

export default async function handler(req, res) {
  try {
    const { muzik_adi, sanatci_adi, sure_bitis, resim_url } = req.query;

    if (!muzik_adi || !sanatci_adi || !sure_bitis || !resim_url) {
      return res.status(400).json({ error: "Eksik parametreler!" });
    }

    // Kart boyutları (Küçük banner formatı)
    const width = 600;
    const height = 200;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Arkaplan için müziğin resmini yükle
    const image = await loadImage(resim_url);
    ctx.drawImage(image, 0, 0, width, height);

    // Hafif blur efekti ekleyerek yazıları okunabilir hale getir
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, width, height);

    // Yazılar için font ve renk ayarları
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px Arial";
    ctx.fillText(muzik_adi, 20, 40);

    ctx.font = "18px Arial";
    ctx.fillText(sanatci_adi, 20, 70);

    // Müzik ilerleme çubuğu
    const progressWidth = width - 40;
    const progressHeight = 10;
    const progressY = 120;

    ctx.fillStyle = "#999999";
    ctx.fillRect(20, progressY, progressWidth, progressHeight);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(20, progressY, progressWidth * 0.4, progressHeight); // %40 ilerleme simüle edildi

    ctx.font = "14px Arial";
    ctx.fillText("00:00", 20, progressY + 25);
    ctx.fillText(sure_bitis, width - 60, progressY + 25);

    // Resmi yan tarafa ekle
    const logoSize = 80;
    ctx.drawImage(image, width - logoSize - 20, 20, logoSize, logoSize);

    res.setHeader("Content-Type", "image/png");
    res.send(canvas.toBuffer());
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası!" });
  }
                 }
                          
