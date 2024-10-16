export default function ApiPage() {
  return (
    <>
      <div className="w-full my-10">
        <div className="flex w-full justify-center">
          <img width="400" src="/img/api-header.png" alt="API Header" />
        </div>
        <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
          <i className="fal fa-code text-blue-400 mr-2" />
          API Endpoints
        </h1>
      </div>

      <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sohbet API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="https://slayerbot.vercel.app/api/sohbet/dosc">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fas fa-comments text-4xl text-blue-400"></i>
              </div>
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
        </div>

        {/* Resim Oluşturma API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/image-generation">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fas fa-image text-4xl text-pink-400"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Resim Oluşturma API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Yapay zeka ile metin açıklamalarından resim oluşturan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Rastgele Söz API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/random-quote">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fas fa-quote-right text-4xl text-blue-400"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Rastgele Söz API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Günlük ilham verici sözler ve alıntılar sunan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Atasözü API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/proverb">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fas fa-book-reader text-4xl text-green-400"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Atasözü API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Türk atasözlerini rastgele sunan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Spotify Arama API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/spotify">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fab fa-spotify text-4xl text-green-500"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Spotify API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Spotify üzerinden müzik arama ve bilgi alma API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Çeviri API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/translate">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fas fa-language text-4xl text-purple-400"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Çeviri API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Metinleri farklı dillere çeviren API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Hava Durumu API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/weather">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fas fa-cloud-sun text-4xl text-yellow-400"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Hava Durumu API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Güncel hava durumu bilgilerini sunan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Wikipedia API */}
        <div className="flex flex-col justify-center text-white rounded">
          <a href="/api/wikipedia">
            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
              <div className="rounded-full h-32 w-32 bg-neutral-800 flex items-center justify-center">
                <i className="fab fa-wikipedia-w text-4xl text-gray-200"></i>
              </div>
              <div>
                <h1 className="leading-none text-3xl font-bold text-white">Wikipedia API</h1>        
                <div className="flex items-center mt-1">
                  <p className="font-normal font-sm">
                    Wikipedia'dan bilgi almak için kullanılan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="py-10"></div>
    </>
  );
            }
