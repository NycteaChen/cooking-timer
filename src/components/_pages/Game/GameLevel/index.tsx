import { memo, useContext } from "react";
import { Stars } from "../../../Stars";
import { useTranslation } from "react-i18next";
import { GameContext } from "@/contexts/game.context";
import type { levelItem } from "@/utils/levelList";

export const GameLevel = memo(() => {
  const { t } = useTranslation();
  const { levelData } = useContext(GameContext) as { levelData: levelItem };

  return (
    <>
      <h2 className="text-xl font-bold">{t(levelData?.name || "")}</h2>
      <Stars nums={levelData?.star || 0} />
    </>
  );
});
