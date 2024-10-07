import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GameInstruction } from "@/components/_pages/Game/GameInstruction";
import { GameLevel } from "@/components/_pages/Game/GameLevel";
import { Card } from "@/components/Card";

type GameStarterProps = {
  goToPlay: (name: string) => void;
};

export const GameStarter = ({ goToPlay }: GameStarterProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useTranslation();

  const setNameHandler = useDebounce((value: string) => {
    setName(value);
  }, 100);

  const confirm = useCallback(() => {
    const reg =
      /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g;

    if (!name?.trim()) {
      setErrorMsg("pages_game_error_name_required");
    } else if (name.trim().length > 20) {
      setErrorMsg("pages_game_error_name_length");
    } else if (reg.test(name)) {
      setErrorMsg("pages_game_error_name_format");
    } else {
      setErrorMsg("");
      goToPlay(name);
    }
  }, [name, goToPlay]);

  return (
    <>
      <Card className="animate-fade-in-300">
        <div className="bg-info rounded-t-xl pt-6 px-6 space-y-2 text-center flex flex-col justify-center gap-2">
          <GameLevel />
          <Label className="w-full max-w-xs mx-auto" htmlFor="name">
            {t("pages_game_label_name")}
            <strong className="ml-1 text-accent">*</strong>
          </Label>
          <div className="w-full">
            <Input
              name="name"
              className="max-w-xs mx-auto"
              placeholder={t("pages_game_placeholder_name")}
              onInput={(e) => {
                setNameHandler((e.target as HTMLInputElement).value);
              }}
            />
            <p
              className={cn(
                "text-center text-accent duration-300 py-1 h-8 text-sm",
                errorMsg ? "visible" : "invisible"
              )}
            >
              {t(errorMsg)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-6 px-8">
          <GameInstruction />
          <div className="flex w-full flex-col sm:flex-row-reverse justify-center gap-2">
            <Button className="w-full" onClick={() => confirm()} size="lg">
              {t("component_button_start")}
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => navigate(`/`)}
              size="lg"
            >
              {t("component_button_back")}
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};
