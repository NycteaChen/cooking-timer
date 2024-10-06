import { memo } from "react";
import stainImg from "@/assets/image/stain.svg";

type GamineTimeProps = {
  second: string;
};
export const GamingTime = memo(({ second }: GamineTimeProps) => {
  return (
    <div className="relative text-center text-3xl w-10">
      <span>{second}</span>
      {(+second >= 3 || second === "..") && (
        <img
          className="absolute top-0 animate-fade-in-1000 scale-[1.75]"
          src={stainImg}
          alt="stain"
        />
      )}
    </div>
  );
});
