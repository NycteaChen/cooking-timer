// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages";
import { Game } from "./pages/Game";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="min-h-dvh flex bg-[url(@/assets/image/kitchen-bg.jpg)] bg-no-repeat bg-center bg-cover">
        <section className="w-full backdrop-blur-sm px-3 md:px-4 py-[88px] md:pt-[96px] bg-white/70">
          <Link to="/game" className="mt-6">
            <Button>Game</Button>
          </Link>
          <Link to="/" className="mt-6">
            <Button variant={"outline"}>Home</Button>
          </Link>
          <h1 className="text-primary text-3xl my-5 font-bold underline">
            {t("hello")}
          </h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
