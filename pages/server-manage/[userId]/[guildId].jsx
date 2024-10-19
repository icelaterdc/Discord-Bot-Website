// pages/server-manage/[userId]/[guildId].js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServerManage() {
  const router = useRouter();
  const { userId, guildId } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/getUser");
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);

        if (userData.id !== userId) {
          alert("Geçersiz Yetkilendirme");
          router.push("/");
        }
      } else {
        alert("Lütfen giriş yapın.");
        router.push("/api/login");
      }
    };

    fetchUser();
  }, [userId, guildId]);

  if (!user) return null;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Sunucu Yönetim Paneli</h1>
      <p>Sunucu ID: {guildId}</p>
      {/* Buraya sunucu yönetim detaylarını ekleyebilirsin */}
    </div>
  );
}
