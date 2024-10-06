type RadialProgressProps = {
  value: number;
  text: string | number;
};

// https://play.tailwindcss.com/OObPqXeFsK
// https://stackoverflow.com/questions/77095324/create-a-circular-progress-bar-using-tailwind-css-in-react

export const RadialProgress = ({ value, text }: RadialProgressProps) => {
  return (
    <div className="relative w-20 h-20">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/*  Background circle  */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/*  Progress circle  */}
        <circle
          className="text-accent progress-ring__circle stroke-current"
          strokeWidth="10"
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
    </div>
  );
};
