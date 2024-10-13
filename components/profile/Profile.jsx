import Image from "next/image";
import avatar from "./man.svg";
import clsx from "clsx";

export function Profile({ imageSrc, name, rating, className, children }) {
  return (
    <div className={clsx(className, "flex gap-2 items-center relative")}>
      <Image
        src={imageSrc || avatar}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
      {children}
      <div className="text-left leading-tight">
        <div className="text-lg text-teal-600">{name}</div>
        <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
      </div>
    </div>
  );
}
