import { Chat } from "./components/chat";
import { Conversation } from "./components/conversation";
import { Map } from "./components/map";
import { Trendings } from "./components/trendings";

const App = () => {
  return (
    <div className="py-6 px-4 flex gap-4 w-full h-screen">
      <Chat />

      <div className="overflow-hidden flex flex-col gap-4 justify-between w-full h-full p-4 bg-[var(--background)] border-2 border-black shadow-brutalism rounded-lg">
        <div id="main-content" className="flex gap-4">
          <Map />
          <Trendings />
        </div>
        <Conversation />
      </div>
    </div>
  );
};

export default App;
