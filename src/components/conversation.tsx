import { MaximizeIcon, PaperclipIcon, SendIcon, SmileIcon } from "lucide-react";
import { Bubble } from "./bubble";

export const Conversation = () => {
  return (
    <div className="flex justify-end flex-col gap-2">
      <div className="border-2 border-black rounded-lg p-2 flex flex-col w-full overflow-y-auto max-h-[300px] min-h-[100px]">
        <Bubble />
        <Bubble owner />
        <Bubble />
        <Bubble owner />
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <div className="border-2 border-black cursor-pointer bg-success hover:bg-[#5974fc] ease-in-out duration-200 p-2 rounded-full">
          <MaximizeIcon className="text-black h-5 w-5" />
        </div>
        <div className="border-2 border-black cursor-pointer bg-pink hover:bg-[#5974fc] ease-in-out duration-200 p-2 rounded-full">
          <PaperclipIcon className="text-black h-5 w-5" />
        </div>
        <div className="flex w-full items-center justify-between gap-2 border-2 border-black p-1 rounded-full">
          <div className="cursor-pointer border-2 border-black bg-accent p-2 rounded-full">
            <SmileIcon className="text-black h-5 w-5" />
          </div>
          <input
            className="w-full bg-transparent pl-2 outline-none font-medium font-urbanist"
            placeholder="Digite sua mensagem"
          />
          <div className="cursor-pointer border-2 border-black bg-danger p-2 rounded-full">
            <SendIcon className="text-black h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
