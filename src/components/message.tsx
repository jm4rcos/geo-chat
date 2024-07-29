import { UserRoundIcon } from "lucide-react";

export const Message = () => {
  return (
    <div className="flex cursor-pointer hover:bg-foreground px-3 py-2 border-b border-title items-center gap-2">
      <div className="bg-[var(--info)] relative border-2 border-black h-10 w-10 rounded-full flex items-center justify-center">
        <UserRoundIcon className="text-white" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[var(--title)] font-semibold">Jmrcs97</h1>
        <p className="text-gray-500 max-w-[300px] truncate -mt-1 font-semibold text-sm">
          Busquem comer cimento
        </p>
      </div>
    </div>
  );
};
