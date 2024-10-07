import { cn } from "@/lib/utils";

type RadialProgressProps = {
  value: number;
  text?: string | number;
  sizeClass?: string;
  strokeWidth?: number;
  colorClassName?: string;
  children?: React.ReactNode;
};

// https://play.tailwindcss.com/OObPqXeFsK
// https://stackoverflow.com/questions/77095324/create-a-circular-progress-bar-using-tailwind-css-in-react

export const RadialProgress = ({
  value,
  text,
  sizeClass = "w-20 h-20",
  strokeWidth = 10,
  children,
  colorClassName = "text-accent",
}: RadialProgressProps) => {
  return (
    <div className={cn("relative", sizeClass)}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/*  Background circle  */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/*  Progress circle  */}
        <circle
          className={cn("progress-ring__circle stroke-current", colorClassName)}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          style={{ "--value": value } as React.CSSProperties}
        ></circle>
        <text
          x="50"
          y="53"
          fill="hsl(var(--accent))"
          fontSize="30px"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {text}
        </text>
      </svg>
      {children}
    </div>
  );
};
