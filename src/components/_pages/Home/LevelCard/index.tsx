import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../ui/button";
import type { levelItem } from "@/utils/levelList";
import { Stars } from "@/components/Stars";
import requireImage from "@/utils/requireImage";

export const LevelCard = ({ name, level, time, star }: levelItem) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const selectLevel = () => {
    navigate(`/game/?level=${level}`);
  };

  return (
    <div className="flex rounded-xl w-full bg-white flex-row md:flex-col shadow-xl overflow-hidden max-w-[500px] md:max-w-full border border-solid border-primary md:hover:shadow-[5px_5px_20px_rgba(71,48,10,0.4)] md:duration-300 md:transition-[box-shadow]">
      <figure className="flex-1 p-5 hidden sm:!flex">
        <img
          src={requireImage(`level/${level}.png`)}
          alt={level}
          className="object-cover"
        />
      </figure>
      <div className="flex flex-col gap-2 py-5 px-8 flex-1 justify-between text-center bg-white sm:bg-info">
        <h4 className="font-bold !justify-center md:text-[22px]">{t(name)}</h4>
        <p className="md:text-lg flex-[0] mt-1">
          <Trans
            i18nKey="component_levelCard_training"
            values={{ second: time }}
          />
        </p>
        <Stars nums={star} />
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
