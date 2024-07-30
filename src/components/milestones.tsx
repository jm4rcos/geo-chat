import { ChefHatIcon, FootprintsIcon } from "lucide-react";

export const Milestones = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center p-2">
        <div className="bg-success p-2 h-10 w-10 flex items-center justify-center border-2 border-title rounded-lg">
          <FootprintsIcon className="text-white h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-title font-bold">First steps</h1>
          <p className="text-gray-500 font-semibold text-sm">
            Started a new language
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center p-2">
        <div className="bg-danger p-2 h-10 w-10 flex items-center justify-center border-2 border-title rounded-lg">
          <ChefHatIcon className="text-white h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-title font-bold">Let him cook</h1>
          <p className="text-gray-500 font-semibold text-sm">Let him cook</p>
        </div>
      </div>
    </div>
  );
};
