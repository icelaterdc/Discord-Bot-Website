import axios from 'axios';

export default async function handler(req, res) {
    const { egitim, promt } = req.query; // URL'deki dinamik parametreler

    try {
        // Tilki API'ye GET isteği gönder
        const response = await axios.get(`https://tilki.dev/api/hercai?soru=${promt}`);

        // API'den gelen yanıtı al
        const tilkiCevap = response.data.cevap;

        // Yanıtı kullanarak cevap oluştur ve kullanıcının eğitim notunu ekle
        res.status(200).json({
            egitimNotu: `Eğitim Notu: ${egitim}`,
            cevap: tilkiCevap
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'API isteği başarısız oldu'
        });
    }
}
