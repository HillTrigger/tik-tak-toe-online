import { Profile } from "../profile";
// import { GameTimer } from "./GameTimer";
import { Cross } from "./icons/Cross";
import { Nought } from "./icons/Nought";
import avatar from "./avatar.jpeg";

export function GameInfo() {
  return (
    <div className="bg-slate-50 rounded-lg shadow px-8 py-4 flex items-center justify-between">
      <div className="relative flex gap-3 items-center">
        <Profile
          className="w-[180px]"
          imageSrc={avatar}
          name={"Paromovevg"}
          rating={"1230"}
        >
          <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
            <Cross />
          </div>
        </Profile>
        <div className="h-6 w-px bg-slate-200" />
        <span className="flex text-lg font-semibold">01:08</span>
      </div>
      <div className="relative flex gap-3 items-center">
        <span className="flex text-orange-600 text-lg font-semibold">
          00:08
        </span>
        <div className="h-6 w-px bg-slate-200" />
        <Profile
          className="w-[180px]"
          imageSrc={avatar}
          name={"VereInteding..."}
          rating={"850"}
        >
          <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
            <Nought />
          </div>
        </Profile>
      </div>
    </div>
  );
}
