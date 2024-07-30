import { PlusIcon, UserRoundIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "../context/sidebar-right";
import { cn } from "../lib/utils";

export const UserProfile = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={cn(
        "flex rounded-xl justify-between",
        !isSidebarOpen && "py-2 px-3 bg-primary"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="bg-pink relative border-2 border-black h-10 w-10 rounded-full flex items-center justify-center">
          <UserRoundIcon className="text-white h-5 w-5" />
          <div className="bg-success border-2 border-black h-4 w-4 rounded-full absolute -bottom-0.5 -right-0.5" />
        </div>
        {!isSidebarOpen && (
          <div className="flex flex-col">
            <h1 className="text-title font-bold">user_45618</h1>
            <p className="text-title -mt-1 font-semibold text-sm">
              always learning
            </p>
          </div>
        )}
      </div>
      {!isSidebarOpen && (
        <Button>
          <PlusIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
