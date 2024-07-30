import { useSidebar } from "../../context/sidebar-right";
import { cn } from "../../lib/utils";
import { Groups } from "../groups";
import { InCommon } from "../in-common";
import { Milestones } from "../milestones";
import { Settings } from "../settings";
import { UserProfile } from "../user-profile";
import { Visited } from "../visited";

export const SidebarRight = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={cn(
        "shadow-brutalism ease-in-out duration-300 gap-4 overflow-hidden w-full bg-[var(--background)] flex flex-col border-2 p-4 border-[#000] rounded-xl",
        !isSidebarOpen ? "min-w-[300px] max-w-xs" : "min-w-auto max-w-[80px]"
      )}
    >
      <Settings />
      <UserProfile />
      {!isSidebarOpen && (
        <>
          <Milestones />
          <div className="flex gap-2 w-full">
            <InCommon />
            <Visited />
          </div>
          <Groups />
        </>
      )}
    </div>
  );
};
