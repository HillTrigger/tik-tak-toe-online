import Image from "next/image";
import logoSvg from "./logo.svg";
import { Profile } from "../profile";
import avatar from "../game/images/avatar.jpeg"; // Импорт аватара
import DownArrow from "./DownArrow";
import { UiButton } from "../uikit/UiButton";

export function Header() {
  return (
    <header className="flex items-center bg-white px-8 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <Image src={logoSvg} alt="logo" />
      <div className="w-px bg-slate-200 h-7 mx-6" />
      <UiButton color="primary" size="lg">
        Играть
      </UiButton>
      <button className="flex items-center gap-2 ml-auto text-teal-600 hover:text-teal-500">
        <Profile imageSrc={avatar} name={"Paromovevg"} rating={"1230"} />
        <DownArrow />
      </button>
    </header>
  );
}
