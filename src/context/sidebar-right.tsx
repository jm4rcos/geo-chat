import { createContext, useState, ReactNode, useContext } from "react";

interface SidebarContextType {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
