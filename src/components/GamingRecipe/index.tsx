import { memo } from "react";
import { Trans, useTranslation } from "react-i18next";
import type { recipeItem } from "@/utils/levelRecipes";

type GamingRecipeProps = {
  recipe: recipeItem;
};

export const GamingRecipe = memo(({ recipe }: GamingRecipeProps) => {
  const { t } = useTranslation();
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
          src={`../src/assets/image/recipe/${recipe.img}.png`}
          alt={recipe.img}
          className="mx-auto max-w-[200px] py-3 w-full animate-bounce-in-1000"
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
