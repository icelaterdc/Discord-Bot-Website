import Link from "next/link";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        
        {/* İlk reklam - Üst kısım */}
        <div className="my-5">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9788366285689194"
            crossorigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9788366285689194"
            data-ad-slot="6610180030"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>

        <div className="flex w-full justify-center">
          <img width="500" src="/img/bck.png" />
        </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Slayer Bot
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
          Moderasyon, Eğlence, Ekonomi, Yapay Zeka, Müzik, Botlist, Log, Sunucu
          Koruma ve Hatta Daha Sayılmayacak Bir Çok Özelliği Barındıran Slayer
          Bot ile Sunucunuzun Tüm İhtiyaçlarını Tek Başına Büyük Ölçüde
          Giderebilirsiniz.
        </p>

        {/* İkinci reklam - Botu Ekle/Oyla altı */}
        <div className="my-5">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9788366285689194"
            crossorigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9788366285689194"
            data-ad-slot="6610180030"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>

        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
          <Link href={"https://discord.com/oauth2/authorize?client_id=1201613667561639947&permissions=139455884671&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fc24GWCtxQc&integration_type=0&scope=email+guilds+identify+bot+guilds.join+openid"}>
            <a
              className={
                "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white "
              }
            >
              Botu Ekle
            </a>
          </Link>

          <div className="py-10"></div>
          <Link href={"https://top.gg/bot/1201613667561639947/vote"}>
            <a
              className={
                "px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white "
              }
            >
              Botu Oyla
            </a>
          </Link>
        </div>

        <div
          style={{ zIndex: "-1" }}
          className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]"
        >
          <Image width="600" height="600" src="/img/gift-left.png" />
        </div>
        <div
          style={{ zIndex: "-1" }}
          className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9"
        >
          <Image width="600" height="600" src="/img/gift-right.png" />
        </div>
      </div>

      {/* Üçüncü reklam - Bot özellikleri sonu */}
      <div className="my-5">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9788366285689194"
          crossorigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9788366285689194"
          data-ad-slot="6610180030"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
        <div className="col-span-4">
          <p
            className="text-white text-4xl font-bold"
            dangerouslySetInnerHTML={{ __html: "Slayer Bot" }}
          />
          <p
            className="text-white text-md font-medium text-gray-500/75"
            dangerouslySetInnerHTML={{
              __html:
                "Kendi Duygularınızla Kendinizi Rahatlatabileceğiniz Bir Ortamı Yaratmaya Ne Dersiniz?",
            }}
          />
          <a
            href="https://discord.gg/MfYJqanN8M"
            className={
              "mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"
            }
          >
            <i className="fab fa-discord mr-2" />
            Destek Sunucusu
          </a>
        </div>

        <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-white">
              <p className="text-xl font-semibold mt-5">
                <i className={`fa fa-cogs text-2xl text-amber-500`} /> Kurulum
              </p>
              <p className="text-gray-500 line-clamp-4">
                Botu Davet Et Butonuna Tıklayıp Açılan Pencerede Sunucunuzu
                Seçip Yetkilendir Butonuna Tıklamanız Yeterli!
              </p>
            </div>
          </div>

          {/* Diğer bot özellikleri burada */}
        </div>
      </div>

      {/* Dördüncü reklam - Alt kısım */}
      <div className="my-5">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9788366285689194"
          crossorigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9788366285689194"
          data-ad-slot="6610180030"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </>
  );
}
