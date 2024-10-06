import { memo, useEffect, useState, useRef } from "react";
import { RadialProgress } from "@/components/RadialProgress";
import { GamingTimer } from "@/components/GamingTimer";

type GamingTimerContainerProps = {
  second?: number;
};

export const GamingTimerContainer = memo(
  ({ second = 5 }: GamingTimerContainerProps) => {
    const [time, setTime] = useState(second);
    const [progress, setProgress] = useState(100);

    const timeIntervalId = useRef(0);
    const progressIntervalId = useRef(0);

    useEffect(() => {
      timeIntervalId.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      progressIntervalId.current = setInterval(() => {
        setProgress((prev) => prev - 1);
      }, second * 10);

      return () => {
        clearInterval(progressIntervalId.current);
        clearInterval(timeIntervalId.current);
      };
    }, [second]);

    useEffect(() => {
      if (time < 1) {
        clearInterval(timeIntervalId.current);
      }

      if (progress < 1) {
        clearInterval(progressIntervalId.current);
      }
    }, [time, progress]);

    return time ? (
      <RadialProgress text={time} value={progress} />
    ) : (
      <GamingTimer />
    );
  }
);
