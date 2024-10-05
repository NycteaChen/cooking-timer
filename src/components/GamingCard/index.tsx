import { useMemo } from "react";
import { Card } from "@/components/Card";
import { GamingRecipe } from "@/components/GamingRecipe";
import levelRecipes from "@/utils/levelRecipes";
import type { levelItem } from "@/utils/levelList";

export const GamingCard = ({ levelData }: { levelData?: levelItem }) => {
  const recipe = useMemo(() => {
    const randomNum = Math.floor(Math.random() * 3);
    return levelRecipes?.[levelData?.level || "easy"]?.[randomNum];
  }, [levelData]);

  return (
    <Card className="px-4 py-8">
      <GamingRecipe recipe={recipe} />
    </Card>
  );
};
