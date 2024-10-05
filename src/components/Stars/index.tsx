import starIcon from "@/assets/image/star.svg";

type StarsProps = {
  nums: number;
};

export const Stars = ({ nums }: StarsProps) => {
  return (
    <>
      {[...Array(nums)].map((_, index) => (
        <img src={starIcon} className="w-5 h-5" key={index} />
      ))}
    </>
  );
};
