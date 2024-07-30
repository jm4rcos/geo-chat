import { ChevronLeftIcon, Settings2Icon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "../context/sidebar-right";
import { cn } from "../lib/utils";

export const Settings = () => {
  const { isSidebarOpen, setSidebarOpen } = useSidebar();
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center",
        !isSidebarOpen
          ? "flex-row p-2 rounded-xl border-2 border-black"
          : "flex-col gap-3 "
      )}
    >
      <div className="flex items-center gap-2">
        <Button variant="primary" className="bg-primary">
          <Settings2Icon className="h-5 w-5" />
        </Button>
        {!isSidebarOpen && <h3>Settings</h3>}
      </div>
      <Button onClick={() => setSidebarOpen(!isSidebarOpen)} variant="danger">
        {isSidebarOpen ? (
          <ChevronLeftIcon className="h-5 w-5" />
        ) : (
          <XIcon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};
