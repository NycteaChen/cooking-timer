import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { RadialProgress } from "@/components/RadialProgress";
import { cn } from "@/lib/utils";
import type { levelItem } from "@/utils/levelList";
import type { GameRecordType } from "@/redux/slices/gameSlice";

type PlayerRecordLevelProps = {
  levelData: levelItem;
  levelRecord: GameRecordType[];
};

export const PlayerRecordLevel = memo(
  ({ levelData, levelRecord }: PlayerRecordLevelProps) => {
    const { t } = useTranslation();

    const totalScore = useMemo(
      () =>
        levelRecord.reduce((acc, cur) => {
          acc += Math.abs(+cur.score || 0);
          return acc;
        }, 0),
      [levelRecord]
    );

    const renderAverage = useMemo(
      () => (totalScore / levelRecord.length).toFixed(1),
      [totalScore, levelRecord]
    );

    const renderProgress = useMemo(() => {
      const totalTargetTime = levelRecord.reduce((acc, cur) => {
        acc += cur.targetTime;
        return acc;
      }, 0);
      const progress = (1 - totalScore / totalTargetTime) * 100;

      if (progress > 100) return 100;
      if (progress <= 1) return 1;
      return progress;
    }, [totalScore, levelRecord]);

    return (
      <aside>
        <RadialProgress
          value={renderProgress}
          sizeClass="w-[240px] h-[240px]"
          colorClassName={levelData.color}
          strokeWidth={3}
        >
          <div
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
              levelData.color
            )}
          >
            <h4 className="text-lg font-bold">{t(levelData.name)}</h4>
            <div className="text-[#999] mt-1">
              {t("component_resultDialog_average")}
            </div>
            <h4 className="text-3xl font-bold mt-3">{renderAverage}</h4>
          </div>
        </RadialProgress>
      </aside>
    );
  }
);
