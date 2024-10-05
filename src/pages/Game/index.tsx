import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GameStarter } from "@/components/GameStarter";
import { GamingCard } from "@/components/GamingCard";
import levelList from "@/utils/levelList";

export const Game = () => {
  const levelType = useSearchParams()[0].get("level");
  const [step, setStep] = useState(1);
  // The `state` arg is correctly typed as `RootState` already
  // const level = useAppSelector((state) => state.game.level);
  const navigate = useNavigate();
  const goToPlay = () => {
    setStep(2);
  };

  const levelData = useMemo(
    () => levelList.find((item) => item.level === levelType),
    [levelType]
  );

  useEffect(() => {
    if (!levelData) {
      navigate("/", { replace: true });
    }
  }, [navigate, levelData]);

  return (
    <>
      {step === 1 ? (
        <GameStarter goToPlay={goToPlay} levelData={levelData} />
      ) : (
        <GamingCard levelData={levelData} />
      )}
    </>
  );
};
