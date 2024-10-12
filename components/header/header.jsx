import Image from "next/image";
import logoSvg from "./logo.svg";
import { Profile } from "../profile";
import avatar from "../game/avatar.jpeg"; // Импорт аватара
import DownArrow from "./DownArrow";

export function Header() {
  return (
    <div className="flex items-center bg-white px-8 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <Image src={logoSvg} alt="logo" />
      <div className="w-px bg-slate-200 h-7 mx-6" />
      <button className="text-2xl text-white bg-teal-600 transition-colors rounded-lg leading-tight px-12 py-2 hover:bg-teal-500">
        Играть
      </button>
      <button className="flex items-center gap-2 ml-auto text-teal-600 hover:text-teal-500">
        <Profile imageSrc={avatar} name={"Paromovevg"} rating={"1230"} />
        <DownArrow />
      </button>
    </div>
  );
}
