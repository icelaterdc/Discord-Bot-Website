import React from 'react';
import Image from 'next/image';

const DiscordLogin = ({ user, onLogin, onLogout }) => {
  if (user) {
    return (
      <div className="flex items-center">
        <Image
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full mr-2"
        />
        <button onClick={onLogout} className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
          Çıkış Yap
        </button>
      </div>
    );
  }

  return (
    <button onClick={onLogin} className="flex items-center text-white bg-discord-blue hover:bg-discord-blue-dark px-4 py-2 rounded">
      <i className="fab fa-discord mr-2"></i>
      Giriş Yap
    </button>
  );
};

export default DiscordLogin;
