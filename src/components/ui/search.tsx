import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="flex w-full bg-white items-center justify-between gap-2 border-2 border-black p-1 rounded-full">
      <input
        className="w-full bg-transparent pl-2 outline-none font-medium font-urbanist"
        placeholder="Procurar..."
      />
      <div className="cursor-pointer bg-[var(--info)] hover:bg-[#5974fc] ease-in-out duration-200 p-2 rounded-full">
        <SearchIcon className="text-white h-5 w-5" />
      </div>
    </div>
  );
};
