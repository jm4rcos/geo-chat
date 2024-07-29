import { PlusIcon } from "lucide-react";
import { Search } from "./ui/search";
import { UserInfo } from "./user-info";
import { MessagesContainer } from "./messages-container";

export const Chat = () => {
  return (
    <div className="shadow-brutalism overflow-hidden w-full min-w-[300px] max-w-xs bg-[var(--background)] flex flex-col border-2 border-[#000] rounded-xl">
      <UserInfo />
      <div className="flex px-4 items-center justify-between gap-2">
        <Search />
        <button className="bg-[var(--warning)] hover:bg-[#5974fc] ease-in-out duration-200 p-2 rounded-full border-2 border-black shadow-button">
          <PlusIcon />
        </button>
      </div>
      <MessagesContainer />
    </div>
  );
};
