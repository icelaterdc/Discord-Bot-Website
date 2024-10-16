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

      <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {/* Sohbet API */}
        <div className="flex flex-col justify-center text-white">
          <a href="https://slayerbot.vercel.app/api/sohbet/dosc" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-comments text-2xl text-blue-400"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Sohbet API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Gelişmiş sohbet özellikleri için API endpointi. Bot ile etkileşim kurmak için kullanılır.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Resim Oluşturma API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/image-generation" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-image text-2xl text-pink-400"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Resim Oluşturma API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Yapay zeka ile metin açıklamalarından resim oluşturan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Rastgele Söz API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/random-quote" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-quote-right text-2xl text-blue-400"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Rastgele Söz API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Günlük ilham verici sözler ve alıntılar sunan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Atasözü API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/proverb" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book-reader text-2xl text-green-400"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Atasözü API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Türk atasözlerini rastgele sunan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Spotify API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/spotify" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-spotify text-2xl text-green-500"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Spotify API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Spotify üzerinden müzik arama ve bilgi alma API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Çeviri API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/translate" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-language text-2xl text-purple-400"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Çeviri API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Metinleri farklı dillere çeviren API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Hava Durumu API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/weather" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-cloud-sun text-2xl text-yellow-400"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Hava Durumu API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
                    Güncel hava durumu bilgilerini sunan API endpointi.
                  </p>
                </div>     
              </div>
            </div>
          </a>
        </div>

        {/* Wikipedia API */}
        <div className="flex flex-col justify-center text-white">
          <a href="/api/wikipedia" className="block">
            <div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="rounded-full h-16 w-16 bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-wikipedia-w text-2xl text-gray-200"></i>
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-white mb-2">Wikipedia API</h1>        
                  <p className="text-sm text-gray-300 leading-snug">
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
