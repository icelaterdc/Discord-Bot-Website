// pages/_app.jsx
import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function AwardApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get('user');
    if (userParam) {
      const user = JSON.parse(userParam);
      setUser(user);
      localStorage.setItem('user', userParam);
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    Router.push("/");
  };

  const NavItems = [
    {
      link: true,
      name: "Ana Sayfa",
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: "Komutlar",
      icon: "fa fa-list-alt",
      activeIcon: "fa fa-list-alt",
      href: "/commands",
    },
    {
      link: true,
      name: "Destek Sunucusu",
      icon: "fab fa-discord",
      activeIcon: "fab fa-discord",
      href: "https://discord.gg/MfYJqanN8M",
    },
    {
      link: true,
      name: "Botu Ekle",
      icon: "fal fa-robot",
      activeIcon: "fab fa-robot",
      href: "https://discord.com/oauth2/authorize?client_id=1201613667561639947&permissions=139455884671&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fc24GWCtxQc&integration_type=0&scope=email+guilds+identify+bot+guilds.join+openid",
    },
    {
      link: true,
      name: "Oy Ver",
      icon: "fa fa-plus",
      activeIcon: "fa fa-plus",
      href: "https://top.gg/bot/1201613667561639947/vote",
    },
    {
      link: true,
      name: "Partner ve Sponsorlar",
      icon: "fal fa-handshake",
      activeIcon: "fa fa-handshake",
      href: "/partners",
    },
    {
      link: true,
      name: "API Dokümasyonları",
      icon: "fa fa-book",
      activeIcon: "fa fa-book",
      href: "/api-docs",
    },
    {
      link: true,
      name: "Lisanslar",
      icon: "fa fa-file-contract",
      activeIcon: "fa fa-file-contract",
      href: "/license",
    },
    {
      link: true,
      name: user ? "Çıkış Yap" : "Giriş Yap",
      icon: user
        ? `<img src="${user.avatar}" alt="avatar" className="w-6 h-6 rounded-full" />`
        : "fal fa-sign-in",
      activeIcon: user
        ? `<img src="${user.avatar}" alt="avatar" className="w-6 h-6 rounded-full" />`
        : "fa fa-sign-in",
      href: user ? "#" : "/api/login",
      onClick: user ? handleLogout : null,
    },
  ];

  if (user) {
    NavItems.push({
      link: true,
      name: "Yönetim Paneli",
      icon: "fa fa-cog",
      activeIcon: "fa fa-cog",
      href: "/dashboard",
    });
  }

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
        <div>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
          <script src="/js/main.js?i=2" />
        </div>
      </div>
    </ThemeProvider>
  );
}
