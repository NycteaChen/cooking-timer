import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages";
import { Game } from "./pages/Game";

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
    </>
  );
}

export default App;
