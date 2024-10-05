import { memo, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Stars } from "../Stars";
import levelList from "@/utils/levelList";
import { useTranslation } from "react-i18next";
// import { useAppSelector } from "@/redux/hooks";

export const GameLevel = memo(() => {
  const { t } = useTranslation();
  // The `state` arg is correctly typed as `RootState` already
  // const level = useAppSelector((state) => state.game.level);
  const levelType = useSearchParams()[0].get("level");
  const navigate = useNavigate();
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
      <h2 className="text-xl font-bold">{t(levelData?.name || "")}</h2>
      <Stars nums={levelData?.star || 0} />
    </>
  );
});
