import { Profile } from "../profile";
import { Cross } from "./icons/Cross";
import { Nought } from "./icons/Nought";
import avatar from "./avatar.jpeg";
import clsx from "clsx";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-lg shadow px-8 py-4 flex items-center justify-between",
      )}
    >
      <PlayerInfo avatar={avatar} name="Paromovevg" rating="1230" />
      <PlayerInfo avatar={avatar} name="Hill" rating="850" right />
    </div>
  );
}

function PlayerInfo({ avatar, name, rating, right }) {
  if (right) {
    return (
      <div className="relative flex gap-3 items-center">
        <span className="flex text-orange-600 text-lg font-semibold">
          00:08
        </span>
        <div className="h-6 w-px bg-slate-200" />
        <Profile
          className="w-[180px]"
          imageSrc={avatar}
          name={name}
          rating={rating}
        >
          <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
            <Nought />
          </div>
        </Profile>
      </div>
    );
  }
  return (
    <div className="relative flex gap-3 items-center">
      <Profile
        className="w-[180px]"
        imageSrc={avatar}
        name={name}
        rating={rating}
      >
        <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
          <Cross />
        </div>
      </Profile>
      <div className="h-6 w-px bg-slate-200" />
      <span className="flex text-lg font-semibold">01:08</span>
    </div>
  );
}
