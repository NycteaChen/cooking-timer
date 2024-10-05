import starIcon from "@/assets/image/star.svg";
import { useTranslation } from "react-i18next";

type StarsProps = {
  nums: number;
};

export const Stars = ({ nums }: StarsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex space-x-2 items-center justify-center mx-auto">
        <span>{t("component_levelCard_difficulty")}</span>
        {[...Array(nums)].map((_, index) => (
          <img src={starIcon} className="w-5 h-5" key={index} />
        ))}
      </div>
    </>
  );
};
