import { useMemo, useContext, createContext, useState } from "react";
import { GameContext } from "@/pages/Game";
import { GamingRecipe } from "@/components/GamingRecipe";
import { Card } from "@/components/Card";
import { GamingTimerContainer } from "@/components/GamingTimerContainer";
import levelRecipes from "@/utils/levelRecipes";
import type { levelItem } from "@/utils/levelList";

export const RecipeContext = createContext({});

export const GamingCard = () => {
  const [gameStart, setGameStart] = useState(undefined);
  const { levelData } = useContext(GameContext) as { levelData: levelItem };

  const recipe = useMemo(() => {
    const randomNum = Math.floor(Math.random() * 3);
    return levelRecipes?.[levelData?.level || "easy"]?.[randomNum];
  }, [levelData]);

  return (
    <Card className="relative px-4 py-8 flex flex-col justify-center items-center gap-8">
      <RecipeContext.Provider value={{ recipe, gameStart, setGameStart }}>
        <GamingRecipe />
        <GamingTimerContainer />
      </RecipeContext.Provider>
    </Card>
  );
};
