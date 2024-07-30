import { createContext, useState, ReactNode, useContext } from "react";

interface Country {
  name: string;
  code?: string;
  x: number;
  y: number;
}

interface CountryContextType {
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country | null) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
