import axios from 'axios';

export default async function handler(req, res) {
    const { promt } = req.query; // URL'deki dinamik parametre

    try {
        // Yeni API'ye GET isteği gönder
        const response = await axios.get(`https://api.oxzof.com/sayai?q=${promt}`);

        // API'den gelen yanıtı al (message)
        const apiMessage = response.data.message;

        // Yanıtı döndür
        res.status(200).json({
            message: apiMessage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'API isteği başarısız oldu'
        });
    }
}
