import Image from "next/image";

export default function LicensePage() {
  return (
    <div className="py-20 mb-30 max-w-3xl mx-auto">
      <div className="flex w-full justify-center">
        <img width="500" src="/img/license-header.png" alt="License Banner" />
      </div>

      <h1 className="text-4xl font-extrabold text-center text-white mt-10">
        Slayer Bot Lisansı
      </h1>
      <p className="text-lg text-gray-400 text-center mt-5">
        Hydra Development Collective ve alt kuruluşu Dream Software Inc. tarafından geliştirilen Slayer Bot, bu lisans kapsamında hizmet veren bir Discord botu ve yazılım altyapı sistemidir. Bu lisans, Slayer Bot’un tüm bileşenleri ve API hizmetlerini kapsayan geniş bir kullanım çerçevesi sunar.
      </p>

      <div className="mt-10 space-y-6">
        <h2 className="text-2xl font-bold text-white">Genel Bilgiler</h2>
        <p className="text-md text-gray-300">
          Hydra Development Collective, yazılım geliştirme alanında yenilikçi çözümler sunan bir topluluktur. Slayer Bot ise bu topluluğun en dikkat çekici projelerinden biridir. Dream Software Inc., bu projenin ticari boyutlarını yönetir ve lisanslama süreçlerini yürütür. Slayer Bot, özellikle Discord sunucularına yönelik moderasyon, müzik, eğlence, güvenlik ve çok daha fazlasını sunan bir hizmettir.
        </p>

        <h2 className="text-2xl font-bold text-white">API Hizmetleri</h2>
        <p className="text-md text-gray-300">
          Slayer Bot'un sağladığı API'ler, geliştiricilerin botun özelliklerini kendi sistemleriyle entegre etmesine olanak tanır. Bu API'ler, çeşitli fonksiyonlar için kullanılabilir:
          <ul className="list-disc list-inside mt-3">
            <li>Kullanıcı yönetimi ve kimlik doğrulama API'leri</li>
            <li>Sunucu bilgisi ve kanal yönetimi API'leri</li>
            <li>Moderasyon araçlarına erişim sağlayan API'ler</li>
            <li>Otomasyon ve görev planlama API'leri</li>
            <li>Veri analizi ve raporlama API'leri</li>
          </ul>
        </p>
        <p className="text-md text-gray-300">
          API hizmetleri, hem Slayer Bot'u daha da özelleştirmek isteyen geliştiriciler hem de geniş çaplı entegrasyonlar yapmak isteyen büyük topluluklar için tasarlanmıştır. Bu API'ler, Hydra Development Collective'in kontrolü altında lisanslanmıştır ve sadece yetkili kullanıcılar tarafından kullanılabilir.
        </p>

        <h2 className="text-2xl font-bold text-white">Kod Altyapıları</h2>
        <p className="text-md text-gray-300">
          Slayer Bot’un arkasındaki kod altyapısı, uzun yılların deneyimiyle oluşturulmuş, optimize edilmiş ve güvenlik açısından titizlikle incelenmiş bir sistemdir. Bu altyapı, modüler yapıda tasarlanmıştır ve birçok bileşenden oluşur:
          <ul className="list-disc list-inside mt-3">
            <li>Özelleştirilebilir komutlar ve eklentiler</li>
            <li>Olay tabanlı tetikleyiciler ve otomatik işleyiciler</li>
            <li>Güvenlik ve erişim kontrolleri için özel yazılımlar</li>
            <li>Veritabanı yönetimi ve kayıt sistemi</li>
            <li>Gerçek zamanlı veri işleme ve kullanıcı etkileşimleri</li>
          </ul>
        </p>
        <p className="text-md text-gray-300">
          Bu altyapı sayesinde Slayer Bot, binlerce kullanıcıya aynı anda hizmet verebilir, anlık veri akışlarını yönetebilir ve Discord gibi büyük platformlarla entegre olabilir. Kod altyapısı, Hydra Development Collective tarafından sürekli güncellenmekte ve iyileştirilmektedir.
        </p>

        <h2 className="text-2xl font-bold text-white">Kullanım Şartları</h2>
        <p className="text-md text-gray-300">
          Slayer Bot’u kullanırken, aşağıdaki şartlar geçerlidir:
          <ul className="list-disc list-inside mt-3">
            <li>Slayer Bot'un tüm özellikleri ticari ve kişisel kullanım için uygun şekilde lisanslanmıştır.</li>
            <li>Kodların değiştirilmesi veya izinsiz yeniden dağıtılması yasaktır.</li>
            <li>API'lerin ticari amaçla kullanılması, Hydra Development Collective'in açık iznine tabidir.</li>
            <li>Kullanıcı verileri, Dream Software Inc. tarafından koruma altındadır ve gizlilik politikalarına uygun olarak işlenir.</li>
            <li>Herhangi bir ihlal durumunda, lisans sahipleri yasal işlem başlatma hakkına sahiptir.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold text-white">Veri Gizliliği ve Güvenlik</h2>
        <p className="text-md text-gray-300">
          Slayer Bot, kullanıcı verilerini toplarken ve işlerken en yüksek güvenlik standartlarını benimsemektedir. Kullanıcıların kişisel bilgileri yalnızca botun düzgün çalışması için gerekli olduğu ölçüde işlenir ve üçüncü taraflarla paylaşılmaz. Dream Software Inc., kullanıcı verilerinin korunması ve saklanması konusunda tüm yasal gerekliliklere uygun hareket etmektedir.
        </p>
        <p className="text-md text-gray-300">
          Güvenlik ihlallerine karşı ek önlemler alınmış olup, tüm veriler şifrelenmiş kanallar aracılığıyla iletilmektedir. Kullanıcılar, herhangi bir güvenlik sorunu yaşadıklarında destek kanalları üzerinden bizimle iletişime geçebilir.
        </p>

        <h2 className="text-2xl font-bold text-white">Yasal Haklar ve Sorumluluklar</h2>
        <p className="text-md text-gray-300">
          Bu lisans, Hydra Development Collective ve Dream Software Inc. tarafından korunmaktadır. Kullanıcılar, bu lisans koşullarını ihlal ettiğinde yasal sonuçlarla karşılaşabilirler. Özellikle API'lerin ve kod altyapılarının izinsiz kullanımı, Hydra Development Collective tarafından ciddi yasal yaptırımlara tabi tutulacaktır.
        </p>
        <p className="text-md text-gray-300">
          Lisansın tam metni, Hydra Development Collective'in resmi web sitesinde mevcuttur ve herhangi bir değişiklik veya güncelleme, bu sitede yayınlanacaktır. Dream Software Inc. ise ticari kullanım haklarını denetlemekte ve lisansın uygun bir şekilde kullanılmasını sağlamaktadır.
        </p>
      </div>

      <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/license-left.png" alt="License Left" />
      </div>
      <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image width="600" height="600" src="/img/license-right.png" alt="License Right" />
      </div>
    </div>
  );
      }
      
