// pages/dashboard.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [guilds, setGuilds] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      fetchGuilds();
    } else {
      router.push('/api/login');
    }
  }, []);

  const fetchGuilds = async () => {
    try {
      const token = document.cookie.split('=')[1];
      const userGuildsResponse = await axios.get('https://discord.com/api/users/@me/guilds', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const botGuildsResponse = await axios.get('/api/bot-guilds');

      const userGuilds = userGuildsResponse.data.filter(guild => (guild.permissions & 0x8) === 0x8);
      const botGuilds = new Set(botGuildsResponse.data.map(guild => guild.id));

      const filteredGuilds = userGuilds.filter(guild => botGuilds.has(guild.id));
      setGuilds(filteredGuilds);
    } catch (error) {
      console.error('Failed to fetch guilds:', error);
    }
  };

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Yönetim Paneli</h1>
      {guilds.length === 0 ? (
        <p>Yönetici olduğunuz ve botun üye olduğu sunucu bulunmamaktadır.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {guilds.map((guild) => (
            <div key={guild.id} className="bg-black bg-opacity-60 rounded-lg p-4 shadow-md">
              {guild.icon ? (
                <img
                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                  alt={guild.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {guild.name.charAt(0)}
                  </span>
                </div>
              )}
              <h2 className="text-xl font-semibold text-center mb-2">{guild.name}</h2>
              <Link href={`/server-manage/${user.id}/${guild.id}`}>
                <a className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Yönet
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
          }
