export const Groups = () => {
  return (
    <div className="w-full border-2 border-black flex flex-col gap-4 p-3 rounded-xl ">
      <h3 className="font-lexend text-title font-bold">Common Groups</h3>
      <div className="flex items-center gap-2">
        <img
          src="https://picsum.photos/200"
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-lexend text-title font-bold">Deutsch fur alles</h3>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="https://picsum.photos/365"
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-lexend text-title font-bold">English C1-C2</h3>
      </div>
    </div>
  );
};
