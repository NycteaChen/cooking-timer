import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/redux/hooks";
import { setGameLevel } from "@/redux/slices/gameSlice";
import { Button } from "../ui/button";
import type { levelItem } from "@/utils/levelList";
import { Stars } from "@/components/Stars";
import easyImg from "@/assets/image/level/easy.png";
import mediumImg from "@/assets/image/level/medium.png";
import hardImg from "@/assets/image/level/hard.png";
import { useNavigate } from "react-router-dom";

const imgPool = {
  easy: easyImg,
  medium: mediumImg,
  hard: hardImg,
};

export const LevelCard = ({ name, level, desc, star }: levelItem) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const selectLevel = () => {
    dispatch(setGameLevel(level));
    navigate(`/game/?level=${level}`);
  };

  return (
    <div className="flex rounded-xl w-full bg-white flex-row md:flex-col shadow-xl overflow-hidden max-w-[500px] md:max-w-full border border-solid border-primary md:hover:shadow-[5px_5px_20px_rgba(71,48,10,0.4)] md:duration-300 md:transition-[box-shadow]">
      <figure className="flex-1 p-5 !hidden sm:!flex">
        <img src={imgPool[level]} alt={level} className="object-cover" />
      </figure>
      <div className="flex flex-col gap-2 py-5 px-8 flex-1 justify-between text-center bg-white sm:bg-info">
        <h4 className="font-bold !justify-center md:text-[22px]">{name}</h4>
        <p className="md:text-lg flex-[0] mt-1">{desc}</p>
        <div className="flex space-x-2 items-center justify-center mx-auto">
          <span>{t("component_levelCard_difficulty")}</span>
          <Stars nums={star} />
        </div>
        <div className="card-actions justify-center mt-2">
          <Button
            className="w-[120px] md:w-[150px] md:btn-md md:text-base h-8 md:h-12"
            onClick={() => selectLevel()}
          >
            {t("component_button_select")}
          </Button>
        </div>
      </div>
    </div>
  );
};
