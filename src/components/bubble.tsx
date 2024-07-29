import { UserRoundIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface BubbleProps {
  owner?: boolean;
}
export const Bubble = ({ owner = false }: BubbleProps) => {
  return (
    <div
      className={cn(
        "flex py-0.5 w-full items-center gap-2",
        owner ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "relative border-2 border-black h-8 w-8 rounded-full flex items-center justify-center",
          owner ? "order-last bg-info" : "order-first bg-danger"
        )}
      >
        <UserRoundIcon className="text-white h-5 w-5" />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3
          className={cn(
            "text-[var(--title)] font-lexend text-xs font-semibold",
            owner ? "text-right text-info" : "text-left text-primary"
          )}
        >
          Jmrcs97
        </h3>
        <div
          className={cn(
            "px-4 cursor-pointer py-2 rounded-2xl border-2 border-black",
            owner ? "rounded-tr-none bg-[#E3F2FD]" : "rounded-tl-none bg-white"
          )}
        >
          <p className="text-title -mt-0.5 max-w-[300px] truncate font-semibold">
            Busquem comer cimento
          </p>
        </div>
      </div>
    </div>
  );
};
