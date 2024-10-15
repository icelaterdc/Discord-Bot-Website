import Image from "next/image";

export default function LicensePage() {
  return (
    <div className="py-20 mb-30 max-w-3xl mx-auto text-white">
      <div className="flex w-full justify-center">
        <img width="500" src="/img/license-header.png" alt="License Banner" />
      </div>

      <h1 className="text-4xl font-extrabold text-center mt-10">
        Slayer Bot Lisansı
      </h1>
      <p className="text-lg text-center mt-5">
        Hydra Development Collective ve alt kuruluşu Dream Software Inc. tarafından geliştirilen Slayer Bot, bu lisans kapsamında hizmet veren bir Discord botu ve yazılım altyapı sistemidir. Bu lisans, Slayer Bot'un tüm bileşenleri ve API hizmetlerini kapsayan geniş bir kullanım çerçevesi sunar.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold">Genel Bilgiler</h2>
          <p>
            Hydra Development Collective, yazılım geliştirme alanında yenilikçi çözümler sunan bir topluluktur. Slayer Bot ise bu topluluğun en dikkat çekici projelerinden biridir. Dream Software Inc., bu projenin ticari boyutlarını yönetir ve lisanslama süreçlerini yürütür. Slayer Bot, özellikle Discord sunucularına yönelik moderasyon, müzik, eğlence, güvenlik ve çok daha fazlasını sunan bir hizmettir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Lisans Kapsamı</h2>
          <p>
            Slayer Bot Lisansı, kullanıcılara botun tüm özelliklerini kullanma hakkı tanır. Bu lisans şunları içerir:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Botun temel ve gelişmiş özelliklerini kullanma hakkı</li>
            <li>API'lere sınırlı erişim (ticari kullanım için ek izin gereklidir)</li>
            <li>Düzenli güncellemeler ve yeni özelliklere erişim</li>
            <li>Teknik destek hizmetleri</li>
          </ul>
          <p className="mt-3">
            Bu lisans, son kullanıcı lisans anlaşması (EULA) niteliğindedir ve kullanıcıların botu kullanırken uymaları gereken kuralları ve sınırlamaları belirler.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">API Hizmetleri</h2>
          <p>
            Slayer Bot'un sağladığı API'ler, geliştiricilerin botun özelliklerini kendi sistemleriyle entegre etmesine olanak tanır. Bu API'ler, çeşitli fonksiyonlar için kullanılabilir:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Kullanıcı yönetimi ve kimlik doğrulama API'leri</li>
            <li>Sunucu bilgisi ve kanal yönetimi API'leri</li>
            <li>Moderasyon araçlarına erişim sağlayan API'ler</li>
            <li>Otomasyon ve görev planlama API'leri</li>
            <li>Veri analizi ve raporlama API'leri</li>
          </ul>
          <p className="mt-3">
            API hizmetleri, hem Slayer Bot'u daha da özelleştirmek isteyen geliştiriciler hem de geniş çaplı entegrasyonlar yapmak isteyen büyük topluluklar için tasarlanmıştır. Bu API'ler, Hydra Development Collective'in kontrolü altında lisanslanmıştır ve sadece yetkili kullanıcılar tarafından kullanılabilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Lisans Süreleri ve Yenileme</h2>
          <p>
            Slayer Bot Lisansı, farklı süreler için satın alınabilir:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Aylık abonelik</li>
            <li>Yıllık abonelik (indirimli fiyatla)</li>
            <li>Özel süreli lisanslar (büyük organizasyonlar için)</li>
          </ul>
          <p className="mt-3">
            Lisanslar, süreleri dolmadan önce otomatik olarak yenilenir. Kullanıcılar, yenileme işlemini istedikleri zaman iptal edebilir veya değiştirebilirler. Lisans süresi sona eren kullanıcılar, botun temel özelliklerine sınırlı erişim sağlayabilirler.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Kullanım Şartları</h2>
          <p>
            Slayer Bot'u kullanırken, aşağıdaki şartlar geçerlidir:
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Slayer Bot'un tüm özellikleri ticari ve kişisel kullanım için uygun şekilde lisanslanmıştır.</li>
            <li>Kodların değiştirilmesi veya izinsiz yeniden dağıtılması yasaktır.</li>
            <li>API'lerin ticari amaçla kullanılması, Hydra Development Collective'in açık iznine tabidir.</li>
            <li>Kullanıcı verileri, Dream Software Inc. tarafından koruma altındadır ve gizlilik politikalarına uygun olarak işlenir.</li>
            <li>Herhangi bir ihlal durumunda, lisans sahipleri yasal işlem başlatma hakkına sahiptir.</li>
            <li>Bot, Discord'un hizmet şartlarına uygun olarak kullanılmalıdır.</li>
            <li>Kullanıcılar, botun kötüye kullanımından sorumlu tutulacaktır.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Veri Gizliliği ve Güvenlik</h2>
          <p>
            Slayer Bot, kullanıcı verilerini toplarken ve işlerken en yüksek güvenlik standartlarını benimsemektedir. Kullanıcıların kişisel bilgileri yalnızca botun düzgün çalışması için gerekli olduğu ölçüde işlenir ve üçüncü taraflarla paylaşılmaz. Dream Software Inc., kullanıcı verilerinin korunması ve saklanması konusunda tüm yasal gerekliliklere uygun hareket etmektedir.
          </p>
          <p className="mt-3">
            Güvenlik ihlallerine karşı ek önlemler alınmış olup, tüm veriler şifrelenmiş kanallar aracılığıyla iletilmektedir. Kullanıcılar, herhangi bir güvenlik sorunu yaşadıklarında destek kanalları üzerinden bizimle iletişime geçebilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Yasal Haklar ve Sorumluluklar</h2>
          <p>
            Bu lisans, Hydra Development Collective ve Dream Software Inc. tarafından korunmaktadır. Kullanıcılar, bu lisans koşullarını ihlal ettiğinde yasal sonuçlarla karşılaşabilirler. Özellikle API'lerin ve kod altyapılarının izinsiz kullanımı, Hydra Development Collective tarafından ciddi yasal yaptırımlara tabi tutulacaktır.
          </p>
          <p className="mt-3">
            Lisansın tam metni, Hydra Development Collective'in resmi web sitesinde mevcuttur ve herhangi bir değişiklik veya güncelleme, bu sitede yayınlanacaktır. Dream Software Inc. ise ticari kullanım haklarını denetlemekte ve lisansın uygun bir şekilde kullanılmasını sağlamaktadır.
          </p>
        </section>
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
