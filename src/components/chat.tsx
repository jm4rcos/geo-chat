import { PlusIcon } from "lucide-react";
import { Search } from "./ui/search";
import { UserInfo } from "./user-info";
import { MessagesContainer } from "./messages-container";
import { Button } from "./ui/button";

export const Chat = () => {
  return (
    <div className="shadow-brutalism overflow-hidden w-full min-w-[300px] max-w-xs bg-[var(--background)] flex flex-col border-2 border-[#000] rounded-xl">
      <UserInfo />
      <div className="flex px-4 items-center justify-between gap-2">
        <Search />
        <Button>
          <PlusIcon />
        </Button>
      </div>
      <MessagesContainer />
    </div>
  );
};
