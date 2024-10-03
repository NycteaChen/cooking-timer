import logo from "@/assets/image/logo.svg";

export const Header = () => {
  return (
    <header className="fixed flex items-center z-10 top-0 left-0 w-full bg-header h-[64px] px-3 py-2 md:px-4">
      <h1 className="flex-1 flex space-x-2 items-center">
        <img className="w-[36px] h-[36px]" src={logo} alt="logo" />
        <h1 className="text-[22px] text-primary font-bold">Cooking Timer</h1>
      </h1>
    </header>
  );
};
