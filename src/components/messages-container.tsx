import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Message } from "./message";

export const MessagesContainer = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showGroups, setShowGroups] = useState(false);

  return (
    <div className="flex pt-4 flex-col w-full">
      <button
        onClick={() => setShowMessages(!showMessages)}
        className="flex cursor-pointer items-center justify-between bg-danger border-y-2 border-black p-2"
      >
        <h1 className="text-white font-normal text-lexend">Conversas (3)</h1>
        {!showMessages ? (
          <ChevronDownIcon className="text-white" />
        ) : (
          <ChevronUpIcon className="text-white" />
        )}
      </button>
      {showMessages && (
        <>
          <Message />
          <Message />
          <Message />
        </>
      )}
      <button
        onClick={() => setShowGroups(!showGroups)}
        className="flex cursor-pointer items-center justify-between border-t-1 bg-info border-y-2 border-black p-2"
      >
        <h1 className="text-white font-normal text-lexend">Grupos (3)</h1>
        {!showGroups ? (
          <ChevronDownIcon className="text-white" />
        ) : (
          <ChevronUpIcon className="text-white" />
        )}
      </button>
      {showGroups && (
        <>
          <Message />
          <Message />
          <Message />
        </>
      )}
    </div>
  );
};
