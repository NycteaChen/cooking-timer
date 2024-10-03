import i18n from "@/i18n";

export type levelItem = {
  level: "easy" | "medium" | "hard";
  name: string;
  desc: string;
  color: string;
  star: number;
};

// https://github.com/i18next/react-i18next/issues/1236
// 原問題：切換語言時，levelList 的 name 無法正確切換
export const levelList = () => {
  return [
    {
      level: "easy",
      name: i18n.t("component_levelCard_novice"),
      desc: "8~15",
      color: "text-red-300",
      star: 1,
    },
    {
      level: "medium",
      name: i18n.t("component_levelCard_veteran"),
      desc: "20~35",
      color: "text-orange-200",
      star: 2,
    },
    {
      level: "hard",
      name: i18n.t("component_levelCard_master"),
      desc: "40~60",
      color: "text-cyan-400",
      star: 3,
    },
  ].map((e) => ({
    ...e,
    desc: `${e.desc} ${i18n.t("component_levelCard_training")}`,
  })) as levelItem[];
};

export default levelList;
