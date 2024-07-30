import { useCountry } from "../context/country-context";

export const Trendings = () => {
  const { selectedCountry } = useCountry();
  return (
    <div className="flex flex-col gap-4 p-4 border-2 border-black w-full rounded-xl">
      {selectedCountry ? (
        JSON.stringify(selectedCountry)
      ) : (
        <h4 className="text-center">Selecione um país</h4>
      )}
    </div>
  );
};
