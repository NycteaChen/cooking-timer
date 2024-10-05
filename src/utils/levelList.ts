export type levelItem = {
  level: "easy" | "medium" | "hard";
  name: string;
  time: string;
  color: string;
  star: number;
};

const levelList: levelItem[] = [
  {
    level: "easy",
    name: "component_levelCard_novice",
    time: "8~15",
    color: "text-red-300",
    star: 1,
  },
  {
    level: "medium",
    name: "component_levelCard_veteran",
    time: "20~35",
    color: "text-orange-200",
    star: 2,
  },
  {
    level: "hard",
    name: "component_levelCard_master",
    time: "40~60",
    color: "text-cyan-400",
    star: 3,
  },
];

export default levelList;
