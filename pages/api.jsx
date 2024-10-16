import React from 'react';

export default function ApiPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {/* Kare kutucuk */}
      <div
        className="w-96 h-48 bg-gray-700 bg-opacity-60 text-white flex flex-col justify-center items-center rounded-md"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">SlayerBot API</h2>
        {/* Description */}
        <p className="mb-4 text-center">
          Bu API, SlayerBot'un sohbet fonksiyonlarına erişim sağlar.
        </p>
        {/* Button */}
        <a
          href="https://slayerbot.vercel.app/api/sohbet/dosc"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Link
        </a>
      </div>
    </div>
  );
}
