import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GameContext } from "@/contexts/game.context";
import { GameStarter } from "@/components/_pages/Game/GameStarter";
import { GamingCard } from "@/components/_pages/Game/GamingCard";
import levelList from "@/utils/levelList";

export const Game = () => {
  const levelType = useSearchParams()[0].get("level");
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  const levelData = useMemo(
    () => levelList.find((item) => item.level === levelType),
    [levelType]
  );

  const goToPlay = (name: string) => {
    setStep(2);
    setName(name.trim());
  };

  useEffect(() => {
    if (!levelData) {
      navigate("/", { replace: true });
    }
  }, [navigate, levelData]);

  return (
    <>
      <GameContext.Provider value={{ levelData, name }}>
        {step === 1 ? <GameStarter goToPlay={goToPlay} /> : <GamingCard />}
      </GameContext.Provider>
    </>
  );
};
