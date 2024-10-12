import Image from "next/image";
import avatar from "./man.svg";
export function Profile({ imageSrc, name, rating, children }) {
  return (
    <div className="flex gap-2 items-center relative">
      <Image
        src={imageSrc || avatar}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
      {children}
      <div className="text-left leading-tight">
        <div className="text-lg">{name}</div>
        <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
      </div>
    </div>
  );
}
