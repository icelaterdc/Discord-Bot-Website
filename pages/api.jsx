import Link from 'next/link';

export default function ApiPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">ENDPOINTS</h1>
        
        <div className="bg-black bg-opacity-60 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-2">Sohbet API</h2>
          <p className="text-gray-300 mb-4">
            Gelişmiş sohbet özellikleri için API endpointi.
          </p>
          <Link href="https://slayerbot.vercel.app/api/sohbet/dosc">
            <a className="block w-full bg-blue-600 text-white text-center py-2 rounded">
              Link
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
