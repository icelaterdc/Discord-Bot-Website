// pages/server-manage/[userId]/[serverId].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ServerManage() {
  const router = useRouter();
  const { userId, serverId } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/api/login');
    }
  }, []);

  useEffect(() => {
    if (user && userId !== user.id) {
      router.push('/');
    }
  }, [user, userId]);

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Sunucu Yönetimi</h1>
      <p>Kullanıcı ID: {userId}</p>
      <p>Sunucu ID: {serverId}</p>
    </div>
  );
}
