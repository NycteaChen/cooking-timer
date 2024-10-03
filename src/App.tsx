// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages";
import { Game } from "./pages/Game";

function App() {
  return (
    <>
      <div className="text-center space-x-2 pt-5">
        <Link to="/game" className="mt-6">
          <Button>Game</Button>
        </Link>
        <Link to="/" className="mt-6">
          <Button>Home</Button>
        </Link>
        <h1 className="text-3xl my-5 font-bold underline">Hello world!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
