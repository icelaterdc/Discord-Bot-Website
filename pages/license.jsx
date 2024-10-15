import Link from "next/link";
import Image from "next/image";

export default function LicensePage() {
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
          <img width="500" src="/img/bck.png" alt="Background" />
        </div>
        <p className="text-4xl font-extrabold text-center text-white">
          Lisans Bilgileri
        </p>
        <p className="text-white text-opacity-80 text-center mt-5">
          Bu yazılım Hydra Development Collective ve alt şirketi Dream Software Inc'e aittir. Tüm hakları saklıdır. Slayer Bot, Discord botları, paylaşılan kod altyapıları ve bu API hizmetleri bu lisans altında sunulmaktadır. Hydra Development Collective, yazılım ve API hizmetlerinde titizlikle çalışarak güvenli, optimize edilmiş ve kullanıcı dostu araçlar sunar.
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">API Hizmetleri</h2>
          <p className="text-white text-opacity-80 mt-4">
            Slayer Bot'un sağladığı API'ler, geliştiricilerin çeşitli fonksiyonları hızlı ve kolay bir şekilde entegre etmesine olanak tanır. Bu API'ler, aşağıdaki hizmetleri kapsar:
          </p>
          <ul className="list-disc list-inside text-white text-opacity-80 mt-2">
            <li>Kullanıcı yönetimi ve kimlik doğrulama</li>
            <li>Sunucu bilgisi ve kanal yönetimi API'leri</li>
            <li>Moderasyon araçlarına erişim sağlayan API'ler</li>
            <li>Otomasyon ve görev planlama API'leri</li>
            <li>Veri analitiği ve raporlama hizmetleri</li>
          </ul>
          <p className="text-white text-opacity-80 mt-4">
            API hizmetleri, hem Slayer Bot'u daha da özelleştirmek isteyen kullanıcılar hem de geliştirmek isteyen geliştiriciler için sunulmaktadır. Ayrıca, diğer projelere entegrasyonlar yapmak isteyen büyük topluluklar için uygun API çözümleri mevcuttur.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Kod Altyapıları</h2>
          <p className="text-white text-opacity-80 mt-4">
            Slayer Bot’un arkasındaki kod altyapısı, uzun yılların deneyimi ile geliştirilmiş ve güvenlik açısından titizlikle incelenmiş kodlardan oluşmaktadır. Bu altyapı, şu temel bileşenleri içerir:
          </p>
          <ul className="list-disc list-inside text-white text-opacity-80 mt-2">
            <li>Özelleştirilebilir komutlar ve eklentiler</li>
            <li>Olay tabanlı tetikleyiciler ve otomatik işlem motorları</li>
            <li>Yüksek performanslı veri yönetim sistemleri</li>
            <li>Gerçek zamanlı sunucu içi etkinlik izleyicileri</li>
            <li>Güvenlik odaklı kullanıcı verisi işleme</li>
          </ul>
          <p className="text-white text-opacity-80 mt-4">
            Bu kod altyapıları, geliştirme süreçlerini hızlandırmak ve kullanıcıya en iyi deneyimi sunmak için tasarlanmıştır. Tüm bileşenler Hydra Development Collective'in kontrolü altında ve sürekli olarak güncellenmektedir.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Lisans Hakkında</h2>
          <p className="text-white text-opacity-80 mt-4">
            Slayer Bot ve tüm ilgili yazılımlar, Hydra Development Collective ve alt kuruluşu Dream Software Inc tarafından lisanslanmıştır. Bu lisans, yazılımın kişisel ve ticari kullanımını kapsar, ancak kullanıcılar lisans şartlarına tam olarak uymak zorundadır. Lisans, yazılımın kötüye kullanılmasını ve yeniden dağıtılmasını önler, böylece tüm kullanıcılar güvenli ve kararlı bir ürün elde eder.
          </p>
          <p className="text-white text-opacity-80 mt-4">
            Hydra Development Collective, yazılımın geliştirilmesi ve dağıtılması sürecinde gizliliği ve güvenliği en üst düzeyde tutmaktadır. Kullanıcılar, Slayer Bot'u kullanırken verilerinin titizlikle korunduğundan emin olabilirler. Kişisel bilgiler yalnızca yazılımın işlevselliğini sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla toplanır ve saklanır. Veriler, üçüncü şahıslarla paylaşılmaksızın yalnızca yasal zorunluluklar çerçevesinde kullanılacaktır.
          </p>
          <p className="text-white text-opacity-80 mt-4">
            Hydra Development Collective, yazılımın güvenliğini sağlamak için gelişmiş şifreleme yöntemleri ve güvenlik protokolleri kullanır. Ancak, kullanıcılar da kendi hesap güvenliklerini sağlamak için güçlü şifreler kullanmalı ve hesap bilgilerini başkalarıyla paylaşmamalıdır.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Geliştirici Ekip</h2>
          <p className="text-white text-opacity-80 mt-4">
            Hydra Development Collective ve Dream Software Inc, uzman yazılımcılardan oluşan bir ekip tarafından yönetilmektedir. Ekip üyeleri, yazılım geliştirme, güvenlik, müşteri destek ve API hizmetleri gibi alanlarda yüksek uzmanlığa sahip profesyonellerden oluşmaktadır. Bu ekip, yazılımın her yönünü sürekli olarak güncellemekte ve kullanıcı deneyimini en üst düzeye çıkarmaktadır.
          </p>
          <p className="text-white text-opacity-80 mt-4">
            Geliştirici ekip, kullanıcıların geri bildirimlerine önem verir ve yazılımı daha da iyileştirmek için sürekli olarak çalışır. Tüm geliştirme süreçleri şeffaf olup, kullanıcılar, yeni özellikler veya iyileştirmeler hakkında düzenli olarak bilgilendirilir.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Veri Gizliliği ve Güvenliği</h2>
          <p className="text-white text-opacity-80 mt-4">
            Veri gizliliği ve güvenliği, Hydra Development Collective için öncelikli bir konudur. Kullanıcıların kişisel bilgileri yalnızca gerekli olduğu durumlarda toplanır ve saklanır. Bu veriler, yalnızca yazılımın işlevselliği için gereklidir ve hiçbir koşulda üçüncü şahıslarla paylaşılmaz. Kullanıcıların veri gizliliği, yalnızca kullanıcıların onayı ve yasal gereklilikler doğrultusunda işlenir.
          </p>
          <p className="text-white text-opacity-80 mt-4">
            Hydra Development Collective, kullanıcı verilerini korumak için endüstri standartlarına uygun güvenlik önlemleri kullanmaktadır. Ayrıca, yazılım, veri ihlallerine karşı sürekli olarak denetlenmekte ve güvenlik açıkları tespit edilirse hızlıca düzeltilmektedir.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Yasal Sorumluluklar</h2>
          <p className="text-white text-opacity-80 mt-4">
            Hydra Development Collective, yazılım ve API hizmetlerinin yasal sorumluluklarını yerine getirmek için gerekli tüm önlemleri alır. Yazılım, belirli bir amaca uygunluk garantisi vermez ve kullanıcılar, yazılımı kullanmadan önce tüm yasal sorumluluklarını kendileri yerine getirmelidir. Hydra Development Collective, yazılımın kullanımından kaynaklanacak herhangi bir zarar veya kayıptan sorumlu tutulamaz.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Destek ve İletişim</h2>
          <p className="text-white text-opacity-80 mt-4">
            Hydra Development Collective ve Dream Software Inc, kullanıcılarına her zaman destek sunmaya hazırdır. Sorularınız veya karşılaştığınız sorunlar için destek sunucumuzu ziyaret edebilirsiniz:
          </p>
          <p className="text-white text-opacity-80 mt-2">
            <Link href="https://discord.gg/MfYJqanN8M">
              <a className="underline hover:text-gray-400 transition-colors">Discord Destek Sunucusu</a>
            </Link>
          </p>
          <p className="text-white text-opacity-80 mt-4">
            Ayrıca, lisans ve yazılım hakkındaki diğer sorular için Hydra Development Collective'in resmi destek kanallarına başvurabilirsiniz.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white">Sonuç</h2>
          <p className="text-white text-opacity-80 mt-4">
            Slayer Bot, moderasyon, eğlence, yapay zeka ve çok daha fazlasını sunarak sunucunuzun tüm ihtiyaçlarını karşılar. Yazılım ve API hizmetleri, yüksek performans ve güvenlik standartlarına sahip olup, Hydra Development Collective'in uzmanlığı ile desteklenmektedir. Güvenli, verimli ve kullanıcı dostu bir deneyim için Slayer Bot her zaman sizinle.
          </p>
        </div>
      </div>
    </>
  );
}
