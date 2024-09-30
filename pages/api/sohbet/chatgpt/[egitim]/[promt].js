import axios from 'axios';

export default async function handler(req, res) {
    const { egitim, promt } = req.query; // URL'deki dinamik parametreler

    try {
        // Başka bir API'ye istek yap
        const response = await axios.post(
            'https://beta.h10.pro/v1/chat/completions', 
            {
                model: "gpt-4o-mini", // veya claude-3-haiku
                online: true,
                messages: [
                    { role: "system", content: egitim },
                    { role: "user", content: promt }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer sk-this-limitless-magic`, // Eğer API key gerekiyorsa
                    'Content-Type': 'application/json'
                }
            }
        );

        // API'den gelen yanıtı kullanarak cevap oluştur
        const apiResponse = response.data.choices[0].message.content;

        res.status(200).json({
            cevap: apiResponse
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'API isteği başarısız oldu'
        });
    }
                  }
