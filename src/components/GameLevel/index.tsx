import { memo, useContext } from "react";
import { Stars } from "../Stars";
import { useTranslation } from "react-i18next";
import type { levelItem } from "@/utils/levelList";
import { GameContext } from "@/pages/Game";
// import { useAppSelector } from "@/redux/hooks";

export const GameLevel = memo(() => {
  const { t } = useTranslation();
  const levelData = useContext(GameContext) as levelItem;

  return (
    <>
      <h2 className="text-xl font-bold">{t(levelData?.name || "")}</h2>
      <Stars nums={levelData?.star || 0} />
    </>
  );
});
