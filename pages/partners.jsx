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
                <div className="flex flex-col justify-center text-white">
                    <a href="https://discord.gg/UN2wF7mBVq">
                        <div className="flex flex-col bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-6 rounded-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <img className="rounded-full h-32 w-32 flex-shrink-0" src="/img/slayer-uptime.png" alt="Slayer Uptime" />
                                <h1 className="text-3xl font-bold text-white">Slayer Uptime</h1>
                            </div>
                            <div className="mt-2">
                                <p className="font-normal">
                                    Slayer Uptime, Glitch vb projelerinizi sürekli izleyerek aktif kalmasını sağlayan çok işlevli ve kolay kullanımlı bir Discord botudur.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="py-10"></div>
        </>
    );
}
