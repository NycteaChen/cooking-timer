import { memo, useMemo } from "react";
import levelList from "@/utils/levelList";
import type { PlayerRecordsItemType } from "@/components/ResultDialog";
import { PlayerRecordLevel } from "@/components/PlayerRecordLevel";
import { PlayerRecordItem } from "@/components/PlayerRecordItem";

type PlayerRecordListProps = {
  playerRecord: PlayerRecordsItemType;
};

export const PlayerRecordList = memo(
  ({ playerRecord }: PlayerRecordListProps) => {
    const renderLevelList = useMemo(
      () => levelList.filter((item) => playerRecord?.[item.level]?.length),
      [playerRecord]
    );

    return (
      <ul className="max-h-[calc(100dvh-300px)] overflow-y-auto px-4 md:px-6 flex flex-col space-y-8 md:space-y-10">
        {renderLevelList.map((item) => {
          return (
            <li
              key={item.level}
              className="flex flex-col space-y-6 items-center md:flex-row md:space-y-0 md:space-x-10 md:items-start"
            >
              <PlayerRecordLevel
                levelData={item}
                levelRecord={playerRecord[item.level]}
              />
              <PlayerRecordItem levelRecord={playerRecord[item.level]} />
            </li>
          );
        })}
      </ul>
    );
  }
);
