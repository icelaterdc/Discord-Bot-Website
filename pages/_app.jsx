// _app.jsx (ekleme yapılıyor)

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";
import { ThemeProvider } from "next-themes";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function AwardApp({ Component, pageProps }) {
  const [user, setUser] = useState(null); // Kullanıcı verisi
  const router = useRouter();

  useEffect(() => {
    // Kullanıcı giriş yapmış mı kontrol et
    const fetchUser = async () => {
      const res = await fetch("/api/getUser");
      if (res.ok) {
        const userData = await res.json();
        setUser(userData); // Kullanıcı verisini ayarla
      } else {
        setUser(null); // Kullanıcı yoksa null yap
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout");
    setUser(null); // Çıkış yaptıktan sonra kullanıcıyı null yap
    router.push("/"); // Anasayfaya yönlendir
  };

  const NavItems = [
    {
      link: true,
      name: "Ana Sayfa",
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    // Diğer menü öğeleri burada...
    {
      link: !user, // Giriş yapılmamışsa göster
      name: "Giriş Yap",
      icon: "fa fa-sign-in",
      activeIcon: "fa fa-sign-in",
      href: "/api/login",
    },
    {
      link: user, // Giriş yapılmışsa göster
      name: "Çıkış Yap",
      icon: "fa fa-sign-out",
      activeIcon: "fa fa-sign-out",
      onClick: handleLogout,
    },
    {
      link: user, // Giriş yapılmışsa göster
      name: "Yönetim Paneli",
      icon: "fa fa-cog",
      activeIcon: "fa fa-cog",
      href: "/admin-panel", // Yönetim paneline yönlendirme
    },
  ];

  return (
    <ThemeProvider defaultTheme="violet">
      <div className="h-screen relative border-t-4 border-amber-600">
        <div
          className="bg-gradient-to-b z-10 opacity-[25%] absolute top-0 w-full from-amber-600 to-transparent"
          style={{ height: "500px" }}
        />
        <Head>
          <title>Slayer Bot</title>
        </Head>
        <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
          <Header NavItems={NavItems} />
          <div className="block px-5 md:px-0">
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
