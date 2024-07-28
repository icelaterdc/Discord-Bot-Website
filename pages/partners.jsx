
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partner ve Sponsorlar
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://media.discordapp.net/attachments/1262067722502672384/1267152930788741140/IMG_20240728_191246_001.jpg?ex=66a7bfa1&is=66a66e21&hm=e699724aed0462d0341463c57798dda3e53a5521641aec4777fc090e6013e4d1&.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Oksit Web</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Ucuz, Kalitleli ve Güvenilir Hostingin Adresi OksitWeb! Sunucularda Kesinti Olmaksızın 7/24 Hizmet Vermektedir.
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
};
