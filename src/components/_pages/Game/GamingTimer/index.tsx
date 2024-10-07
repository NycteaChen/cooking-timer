import {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { RecipeContext } from "@/contexts/recipe.context";
import { GamingTime } from "@/components/_pages/Game/GamingTime";
import { GamingOperators } from "@/components/_pages/Game/GamingOperators";
import { GameResult } from "@/components/_pages/Game/GameResult";

export const GamingTimer = () => {
  const { setGameStart } = useContext(RecipeContext) as {
    setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const [record, setRecord] = useState("");
  const [second, setSecond] = useState(0);

  const secondIntervalId = useRef(0);
  const secondRef = useRef(0);

  const timer = useCallback(
    (type: "start" | "stop" | "end" = "start") => {
      clearInterval(secondIntervalId.current);
      setGameStart(type === "start");

      if (type === "start") {
        secondIntervalId.current = setInterval(() => {
          setSecond((prev) => prev + 0.1);
          secondRef.current = secondRef.current + 0.1;
        }, 100);
      } else if (type === "end") {
        setRecord(secondRef.current.toFixed(1));
      }
    },
    [setGameStart]
  );

  const operatorsProps = useMemo(() => {
    return {
      onTimePause: () => timer("stop"),
      onTimeResume: () => timer("start"),
      onTimeEnd: () => timer("end"),
    };
  }, [timer]);

  useEffect(() => {
    timer("start");

    return () => timer("stop");
  }, [timer]);

  return (
    <>
      <GamingTime second={second > 4 ? ".." : second.toFixed(1)} />
      <GamingOperators {...operatorsProps} />
      {record && <GameResult record={record} />}
    </>
  );
};
