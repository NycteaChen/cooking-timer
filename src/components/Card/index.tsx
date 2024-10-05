import { cn } from "@/lib/utils";

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-white max-w-[520px] mx-auto border border-solid border-primary rounded-xl shadow",
        className
      )}
    >
      {children}
    </div>
  );
};
