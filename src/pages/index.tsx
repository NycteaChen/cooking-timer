import { useTranslation } from "react-i18next";
import { levelList } from "@/utils/levelList";
import { LevelCard } from "@/components/LevelCard";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="mb-6 md:mb-8">
        <h2 className="text-primary text-center font-bold text-[28px] md:text-[40px]">
          {t("pages_home_welcomeTitle")}
        </h2>
        <h3 className="text-secondary text-center font-bold text-xl md:text-2xl">
          {t("pages_home_welcomeText")}
        </h3>
      </section>
      <section className="flex items-center space-y-3 flex-col md:flex-row md:space-y-0 md:space-x-5 md:justify-center max-w-[1320px] mx-auto">
        {levelList().map((item) => (
          <LevelCard {...item} key={item.level} />
        ))}
      </section>
    </>
  );
};
