// pages/api/bot-guilds.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const botToken = 'MTIwMTYxMzY2NzU2MTYzOTk0Nw.GeJ7lr.BkGxlyx_xnV-pWcLlcW0COBOme3HUDQgfIn2Pc'; // Bot token'ı burada açık bir şekilde verilmiştir.
      const response = await axios.get('https://discord.com/api/users/@me/guilds', {
        headers: {
          Authorization: `Bot ${botToken}`,
        },
      });

      const guilds = response.data.map(guild => ({
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
