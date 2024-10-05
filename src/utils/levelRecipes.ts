export type recipeItem = {
  name: string;
  time: number;
  img: string;
};

type levelType = "easy" | "medium" | "hard";

type levelRecipe = {
  [key in levelType]: recipeItem[];
};

const levelRecipes: levelRecipe = {
  easy: [
    {
      name: "component_gamingRecipe_grilledSushi",
      time: 12,
      img: "grilledSushi",
    },
    { name: "component_gamingRecipe_eggDropSoup", time: 8, img: "eggDropSoup" },
    { name: "component_gamingRecipe_toast", time: 15, img: "toast" },
  ],
  medium: [
    {
      name: "component_gamingRecipe_grilledMochi",
      time: 22,
      img: "grilledMochi",
    },
    { name: "component_gamingRecipe_karaage", time: 35, img: "karaage" },
    {
      name: "component_gamingRecipe_firedDumpling",
      time: 28,
      img: "firedDumpling",
    },
  ],
  hard: [
    {
      name: "component_gamingRecipe_hamburgerSteak",
      time: 45,
      img: "hamburgerSteak",
    },
    { name: "component_gamingRecipe_lavaCake", time: 52, img: "lavaCake" },
    {
      name: "component_gamingRecipe_roastChicken",
      time: 60,
      img: "roastChicken",
    },
  ],
};

export default levelRecipes;
