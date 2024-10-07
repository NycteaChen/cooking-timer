import { memo, useMemo } from "react";
import levelList from "@/utils/levelList";
import type { PlayerRecordsItem } from "@/components/ResultDialog";
import { PlayerRecordLevel } from "@/components/PlayerRecordLevel";

type PlayerRecordListProps = {
  playerRecord: PlayerRecordsItem;
};

export const PlayerRecordList = memo(
  ({ playerRecord }: PlayerRecordListProps) => {
    const renderLevelList = useMemo(
      () => levelList.filter((item) => playerRecord?.[item.level]?.length),
      [playerRecord]
    );

    console.log("playerRecord :>> ", playerRecord);
    return (
      <ul className="max-h-[75dvh] overflow-y-auto px-4 md:px-6">
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
              {playerRecord[item.level].map((record, index) => (
                <div key={`${item.level}-${index}`}>{record.userName}</div>
              ))}
            </li>
          );
        })}
      </ul>
    );
  }
);
