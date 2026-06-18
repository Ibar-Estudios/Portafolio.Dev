import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PAGES = ["home", "about", "projects", "contact"];

export default function IndexPage() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (pageId) => {
    if (!PAGES.includes(pageId)) return;
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync browser back/forward with virtual navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (PAGES.includes(hash)) setActivePage(hash);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.history.pushState(null, "", `#${activePage}`);
  }, [activePage]);

  return (
    <>
      <Head>
        <title>Ibar Caubet — Full Stack Developer</title>
        <meta
          name="description"
          content="Portafolio de Ibar Exequiel Caubet, desarrollador Full Stack MERN especializado en React, Node.js y MongoDB. Pilar, Buenos Aires."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ibar Caubet — Full Stack Developer" />
        <meta
          property="og:description"
          content="Desarrollador Full Stack MERN. React · Node.js · MongoDB · Next.js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar activePage={activePage} onNavigate={navigate} />

      {/* Virtual page rendering — keeps components mounted for smooth transitions */}
      <div style={{ display: activePage === "home" ? "block" : "none" }}>
        <Home onNavigate={navigate} visible={activePage === "home"} />
        <Footer />
      </div>

      <div style={{ display: activePage === "about" ? "block" : "none" }}>
        <About visible={activePage === "about"} />
      </div>

      <div style={{ display: activePage === "projects" ? "block" : "none" }}>
        <Projects visible={activePage === "projects"} />
        <Footer />
      </div>

      <div style={{ display: activePage === "contact" ? "block" : "none" }}>
        <Contact visible={activePage === "contact"} />
        <Footer />
      </div>
    </>
  );
}
