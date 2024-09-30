// pages/api/sohbet/gpt/[egitim]/[promt].js

import axios from 'axios';

export default async function handler(req, res) {
    const { egitim, promt } = req.query;

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

        // Aldığımız cevabı kullanarak kendi API'mizin yanıtını oluştur
        const apiResponse = response.data.choices[0].message.content;

        // Kendi API'nizin yanıtı
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
