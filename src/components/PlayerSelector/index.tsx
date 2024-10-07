import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Selector } from "@/components/Selector";

type PlayerSelectorProps = {
  playerList: string[];
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
};

export const PlayerSelector = memo(
  ({ playerList, player, setPlayer }: PlayerSelectorProps) => {
    const { t } = useTranslation();

    return (
      <Selector
        list={playerList}
        value={player}
        setValue={setPlayer}
        placeholder={t("component_resultDialog_select_placeholder")}
        disabled={!playerList?.length}
        triggerClassName="w-full max-w-[320px]"
        keyField={undefined}
      />
    );
  }
);
