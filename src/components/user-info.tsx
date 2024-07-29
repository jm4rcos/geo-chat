import { UserRoundIcon } from "lucide-react";
import { BellIcon } from "./icons/bell-icon";

export const UserInfo = () => {
  return (
    <div className="flex p-4 justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[var(--info)] relative border-2 border-black h-10 w-10 rounded-full flex items-center justify-center">
          <UserRoundIcon className="text-white" />
          <div className="bg-[var(--success)] border-2 border-black h-4 w-4 rounded-full absolute -bottom-0.5 -right-0.5" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-[var(--title)] font-bold">Jmrcs97</h1>
            <div className="bg-[var(--foreground)] h-2 w-2 rounded-full" />
            <p>João Marcos</p>
          </div>
          <p className="text-gray-500 font-semibold text-sm">
            Busquem comer cimento
          </p>
        </div>
      </div>
      <div className="relative cursor-pointer ">
        <BellIcon />
        <div className="bg-[var(--danger)] border-2 border-black h-3.5 w-3.5 rounded-full absolute top-0 right-0" />
      </div>
    </div>
  );
};
