import { Chat } from "./components/chat";
import { Conversation } from "./components/conversation";
import { Map } from "./components/map";
import { SidebarRight } from "./components/sidebar-right";
import { Trendings } from "./components/trendings";
import { CountryProvider } from "./context/country-context";
import { SidebarProvider } from "./context/sidebar-right";

const App = () => {
  return (
    <CountryProvider>
      <SidebarProvider>
        <div className="w-full min-h-screen overflow-hidden flex items-center justify-center">
          <div className="py-6 px-4 flex gap-4 max-w-6xl w-full h-screen">
            <Chat />

            <div className="overflow-hidden flex flex-col gap-4 justify-between w-full h-full p-4 bg-[var(--background)] border-2 border-black shadow-brutalism rounded-lg">
              <div id="main-content" className="flex flex-col w-full gap-4">
                <div className="relative">
                  <Map />
                </div>
                <Trendings />
              </div>
              <Conversation />
            </div>

            <SidebarRight />
          </div>
        </div>
      </SidebarProvider>
    </CountryProvider>
  );
};

export default App;
