import { memo } from "react";
import { Stars } from "../Stars";
import { useTranslation } from "react-i18next";
import type { levelItem } from "@/utils/levelList";
// import { useAppSelector } from "@/redux/hooks";

export const GameLevel = memo(({ levelData }: { levelData?: levelItem }) => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-xl font-bold">{t(levelData?.name || "")}</h2>
      <Stars nums={levelData?.star || 0} />
    </>
  );
});
