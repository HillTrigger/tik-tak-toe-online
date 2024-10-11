import Image from "next/image";
import logoSvg from "./logo.svg";
import Profile from "../profile";

export default function Header() {
  return (
    <div className="flex items-center bg-white px-8 py-6 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <Image src={logoSvg} alt="logo" />
      <div className="w-px bg-slate-200 h-7 mx-6" />
      <button className="text-2xl text-white bg-teal-600 transition-colors rounded-lg leading-tight px-12 py-2 hover:bg-teal-500">
        Играть
      </button>
      <button>
        <Profile name={"Paromovevg"} rating={"1230"} />
        <svg
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.18753 6.75003C6.04368 6.75003 5.89968 6.69505 5.78985 6.58522L0.164848 0.960222C-0.0549492 0.740426 -0.0549492 0.384504 0.164848 0.164848C0.384645 -0.0548086 0.740566 -0.0549492 0.960222 0.164848L6.18753 5.39216L11.4148 0.164848C11.6346 -0.0549492 11.9906 -0.0549492 12.2102 0.164848C12.4299 0.384645 12.43 0.740566 12.2102 0.960222L6.58522 6.58522C6.47539 6.69505 6.33139 6.75003 6.18753 6.75003Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
