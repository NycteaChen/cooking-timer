import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import langIcon from "@/assets/image/lang.svg";

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
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Select
      defaultValue={lang}
      onValueChange={(value: string) => {
        setLang(value);
        changeLanguage(value);
      }}
    >
      <SelectTrigger className="w-[150px] border-0 justify-between focus:!shadow-none focus:!outline-offset-0">
        <div className="flex items-center">
          <img src={langIcon} className="w-6 h-6 mr-2" />
          <SelectValue
            placeholder={t("component_select_placeholder")}
            aria-label={lang}
          />
        </div>
      </SelectTrigger>
      <SelectContent className="w-[200px] p-1">
        {langList.map((lang) => (
          <SelectItem className="py-2" value={lang.value} key={lang.value}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
