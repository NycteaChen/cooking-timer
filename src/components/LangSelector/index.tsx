import { useState } from "react";
import { useTranslation } from "react-i18next";
import langIcon from "@/assets/image/lang.svg";
import { Selector } from "@/components/Selector";

const langList = [
  {
    name: "繁體中文",
    value: "zh-TW",
  },
  {
    name: "English",
    value: "en",
  },
];

export const LangSelector = () => {
  const [lang, setLang] = useState("zh-TW");
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Selector
      icon={langIcon}
      list={langList}
      value={lang}
      setValue={setLang}
      onChange={changeLanguage}
      triggerClassName="w-[150px] border-0"
      contentClassName="w-[200px]"
    />
  );
};
