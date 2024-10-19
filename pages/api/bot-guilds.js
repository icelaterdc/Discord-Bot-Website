// pages/api/bot-guilds.js
import { getBot } from '../../lib/discord-bot'; // Bot client'ınıza erişim sağlayan bir fonksiyon

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const bot = getBot();
      const guilds = bot.guilds.cache.map(guild => ({
        id: guild.id,
        name: guild.name,
        icon: guild.icon
      }));
      res.status(200).json(guilds);
    } catch (error) {
      console.error('Failed to fetch bot guilds:', error);
      res.status(500).json({ error: 'Failed to fetch bot guilds' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
