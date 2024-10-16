export default function Partners() {
    return (
        <>
            <div className="w-full my-10">
                <div className="flex w-full justify-center">
                    <img width="400" src="/img/bck4.png" alt="Background" />
                </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partner ve Sponsorlar
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center text-white rounded">
                    <a href="https://discord.gg/UN2wF7mBVq">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32 flex-shrink-0" src="/img/slayer-uptime.png" alt="Slayer Uptime" />
                            <div className="flex-1 min-w-0"> {/* Added min-w-0 to allow text truncation */}
                                <h1 className="leading-none text-3xl font-bold text-white truncate">Slayer Uptime</h1>        
                                <div className="mt-1">
                                    <p className="font-normal text-sm line-clamp-3"> {/* Added line-clamp-3 for text truncation */}
                                        Slayer Uptime, Glitch vb projelerinizi sürekli izleyerek aktif kalmasını sağlayan çok işlevli ve kolay kullanımlı bir Discord botudur.
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
