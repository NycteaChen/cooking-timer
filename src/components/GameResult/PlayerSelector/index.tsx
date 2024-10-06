import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

type PlayerSelectorProps = {
  playerList: string[];
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
};

export const PlayerSelector = memo(
  ({ playerList, player, setPlayer }: PlayerSelectorProps) => {
    const { t } = useTranslation();

    return (
      <Select
        defaultValue={player}
        onValueChange={(value: string) => setPlayer(value)}
        disabled={!playerList?.length}
      >
        <SelectTrigger className="w-[320px] justify-between focus:!shadow-none focus:!outline-offset-0">
          <SelectValue
            placeholder={t("component_resultDialog_select_placeholder")}
            aria-label={player}
          />
        </SelectTrigger>
        <SelectContent className="p-1">
          {playerList.map((player) => (
            <SelectItem className="py-2" value={player} key={player}>
              {player}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);
