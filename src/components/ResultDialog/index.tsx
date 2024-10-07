import { memo, useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/redux/hooks";
import type { GameState, GameRecordType } from "@/redux/slices/gameSlice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlayerSelector } from "@/components/PlayerSelector";
import statsImg from "@/assets/image/stats.svg";
import emptyImg from "@/assets/image/no-data.svg";

type PlayerRecordsItem = {
  [level: string]: GameRecordType[];
};

export const ResultDialog = memo(() => {
  const { t } = useTranslation();
  const playerRecords = useAppSelector(
    (state: GameState) => state.playerRecords
  );
  const playerNameList = useMemo(
    () => Object.keys(playerRecords || {}),
    [playerRecords]
  );
  const [player, setPlayer] = useState("");

  const playerRecordsList = useMemo(() => {
    const data: { [player: string]: PlayerRecordsItem } = {};

    for (const player in playerRecords) {
      data[player] = playerRecords[player].reduce(
        (acc: PlayerRecordsItem, cur) => {
          if (!acc?.[cur.level]?.length) {
            acc[cur.level] = [];
          }
          acc[cur.level].push(cur);
          return acc;
        },
        {}
      );
    }
    return data;
  }, [playerRecords]);

  useEffect(() => {
    if (playerNameList[0]) {
      setPlayer(playerNameList[0]);
    }
  }, [playerNameList]);

  console.log(playerRecordsList);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="transition-all bg-secondary fixed w-[60px] h-[60px] rounded-full bottom-5 right-5 shadow-xl p-3 md:hover:scale-105 md:hover:bg-primary">
            <img src={statsImg} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[1024px]">
          <DialogHeader>
            <DialogTitle>{t("component_resultDialog_title")}</DialogTitle>
            <DialogDescription aria-describedby={undefined} />
          </DialogHeader>
          <div className="py-4">
            <div className="flex flex-col items-center py-6 space-y-6 md:space-y-0 md:flex-row-reverse px-4 md:px-6">
              <PlayerSelector
                playerList={playerNameList}
                player={player}
                setPlayer={setPlayer}
              />
              <h4 className="text-3xl font-bold break-word md:mr-auto">
                {player}
              </h4>
            </div>
            {playerNameList.length ? (
              <section className="max-h-[75dvh] overflow-y-auto px-4 md:px-6">
                <div className="break-word">
                  {JSON.stringify(playerRecords[player])}
                </div>
              </section>
            ) : (
              <div className="h-[150px] flex flex-col space-y-3 justify-center items-center">
                <img
                  className="w-[60px] h-[60px]"
                  src={emptyImg}
                  alt="no-data"
                />
                <p className="text-xs text-[#999]">
                  {t("component_resultDialog_empty")}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});
