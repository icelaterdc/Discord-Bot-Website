export default function ApiPage() {
  return (
    <>
      <div className="w-full my-10">
        {/* Banner Ekleme */}
        <div className="flex w-full justify-center">
          <img width="400" src="/img/api-header.png" alt="API Header" />
        </div>
        {/* Endpoints Başlık ve Logo */}
        <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white flex justify-center items-center">
          {/* Logo */}
          <img src="/img/chat-api-icon.png" alt="Logo" className="h-10 w-10 mr-3" />
          API Endpoints
        </h1>
      </div>

      <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://slayerbot.vercel.app/api/sohbet/dosc">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Sohbet API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Gelişmiş sohbet özellikleri için API endpointi. Bot ile etkileşim kurmak için kullanılır.
                  </p>
                </div>     
              </div>
            </div>
          </a>
          {/* Buton */}
          <div className="mt-4 text-center">
            <a className="bg-blue-500 text-white py-2 px-4 rounded" href="https://slayerbot.vercel.app/api/sohbet/dosc">Link</a>
          </div>
        </div>
      </div>

      {/* Ekstra boşluk */}
      <div className="py-10"></div>
    </>
  );
}
