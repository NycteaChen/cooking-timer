import { memo, useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GamingOperatorsProps = {
  [key: string]: () => void;
};

export const GamingOperators = memo(
  ({ onTimeEnd, onTimePause, onTimeResume }: GamingOperatorsProps) => {
    const { t } = useTranslation();
    const [showMask, setShowMask] = useState(false);
    const keyDownStatus: { current: { [key: number]: boolean } } = useRef({});

    const timePauseHandler = useCallback(() => {
      onTimePause();
      setShowMask(true);
    }, [onTimePause]);

    const timeResumeHandler = useCallback(() => {
      onTimeResume();
      setShowMask(false);
    }, [onTimeResume]);

    const keyupEvent = useCallback((e: KeyboardEvent) => {
      keyDownStatus.current[e.keyCode] = false;
    }, []);

    const keydownEvent = useCallback(
      (e: KeyboardEvent) => {
        keyDownStatus.current[e.keyCode] = true;

        if (keyDownStatus.current[16] && keyDownStatus.current[83]) {
          if (showMask) {
            timeResumeHandler();
          } else {
            timePauseHandler();
          }
        } else if (keyDownStatus.current[32] && !showMask) {
          onTimeEnd();
          document.removeEventListener("keydown", keydownEvent);
        }
      },
      [showMask, onTimeEnd, timePauseHandler, timeResumeHandler]
    );

    const timeEndHandler = useCallback(() => {
      onTimeEnd();
      document.removeEventListener("keydown", keydownEvent);
    }, [onTimeEnd, keydownEvent]);

    useEffect(() => {
      document.addEventListener("keydown", keydownEvent);
      document.addEventListener("keyup", keyupEvent);

      return () => {
        document.removeEventListener("keydown", keydownEvent);
        document.removeEventListener("keyup", keyupEvent);
      };
    }, [keydownEvent, keyupEvent]);

    return (
      <>
        <div className="flex w-full flex-col sm:flex-row-reverse justify-center gap-2">
          <Button className="w-full flex-1" onClick={() => timeEndHandler()}>
            {t("component_button_now")}
          </Button>
          <Button
            className="w-full flex-1"
            variant="outline"
            onClick={() => timePauseHandler()}
          >
            {t("component_button_pause")}
          </Button>
        </div>
        <div
          className={cn(
            "rounded-xl absolute bg-white/90 top-0 left-0 w-full h-full flex-col space-y-4 items-center justify-center",
            showMask ? "flex" : "hidden"
          )}
        >
          <h3 className="text-bold text-2xl">
            {t("component_gamingOperators_pauseHint")}
          </h3>
          <Button
            className="w-[120px] md:text-base"
            onClick={() => timeResumeHandler()}
          >
            {t("component_button_resume")}
          </Button>
        </div>
      </>
    );
  }
);
