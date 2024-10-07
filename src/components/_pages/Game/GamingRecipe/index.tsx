import { memo, useContext } from "react";
import { Trans, useTranslation } from "react-i18next";
import { RecipeContext } from "@/contexts/recipe.context";
import type { recipeItem } from "@/utils/levelRecipes";
import requireImage from "@/utils/requireImage";
import { cn } from "@/lib/utils";

export const GamingRecipe = memo(() => {
  const { t } = useTranslation();
  const { recipe, gameStart } = useContext(RecipeContext) as {
    recipe: recipeItem;
    gameStart: boolean;
  };

  return (
    <div>
      <h2 className="text-xl leading-7 font-bold text-center">
        <Trans
          i18nKey="component_gamingRecipe_title"
          values={{ recipe: t(recipe.name) }}
        />
      </h2>
      <figure>
        <img
          src={requireImage(`recipe/${recipe.img}.png`)}
          alt={recipe.img}
          className={cn(
            "mx-auto max-w-[200px] py-3 w-full",
            gameStart === undefined && "animate-bounce-in-1000",
            gameStart && "animate-shake-1200"
          )}
        />
      </figure>
      <h3 className="font-bold text-center">
        <Trans
          i18nKey="component_gamingRecipe_targetTime"
          values={{ second: recipe.time }}
          components={{
            s: <span className="text-2xl" />,
          }}
        />
      </h3>
    </div>
  );
});
