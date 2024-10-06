import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages";
import { Game } from "@/pages/Game";
import { Header } from "@/components/Header";
import { ResultDialog } from "@/components/ResultDialog";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-dvh flex bg-[url(@/assets/image/kitchen-bg.jpg)] bg-no-repeat bg-center bg-cover">
        <section className="w-full backdrop-blur-sm px-3 md:px-4 py-[88px] md:pt-[96px] bg-white/70">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </section>
      </main>
      <ResultDialog />
    </>
  );
}

export default App;
