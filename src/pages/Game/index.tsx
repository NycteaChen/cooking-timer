import { useState } from "react";
import { GameStarter } from "@/components/GameStarter";
import { Gaming } from "@/components/Gaming";

export const Game = () => {
  const [step, setStep] = useState(1);
  const goToPlay = () => {
    setStep(2);
  };

  return <>{step === 1 ? <GameStarter goToPlay={goToPlay} /> : <Gaming />}</>;
};
