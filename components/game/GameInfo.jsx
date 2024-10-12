import { Profile } from "../profile";
import { GameTimer } from "./GameTimer";
import { Cross } from "./icons/Cross";
import { Nought } from "./icons/Nought";
import avatar from "./avatar.jpeg";

export function GameInfo() {
  return (
    <div className="bg-slate-50 rounded-lg shadow px-8 py-4 flex justify-between">
      <Profile imageSrc={avatar} name={"Paromovevg"} rating={"1230"}>
        <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
          <Cross />
        </div>
      </Profile>
      <GameTimer />
      <Profile imageSrc={avatar} name={"VereInteding..."} rating={"850"}>
        <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
          <Nought />
        </div>
      </Profile>
    </div>
  );
}
