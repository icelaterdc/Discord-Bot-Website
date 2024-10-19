// pages/admin-panel.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminPanel() {
  const [guilds, setGuilds] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGuilds = async () => {
      const res = await fetch("/api/getAdminGuilds");
      if (res.ok) {
        const guildData = await res.json();
        setGuilds(guildData);
      } else {
        router.push("/api/login"); // Giriş yapılmamışsa giriş sayfasına yönlendir
      }
    };

    fetchGuilds();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Yönetim Paneli</h1>
      <div className="grid grid-cols-3 gap-6">
        {guilds.map((guild) => (
          <div key={guild.id} className="bg-black bg-opacity-60 p-5 rounded-lg shadow-lg">
            <img src={guild.icon} alt={guild.name} className="w-16 h-16 mx-auto" />
            <h2 className="text-white text-center mt-4">{guild.name}</h2>
            <button
              onClick={() => router.push(`/server-manage/${guild.owner_id}/${guild.id}`)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
            >
              Yönet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
    }
                    
