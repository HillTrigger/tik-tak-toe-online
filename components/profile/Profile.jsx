import Image from "next/image";
import avatar from "./man.svg";
import clsx from "clsx";

export function Profile({
  imageSrc = avatar,
  name,
  rating,
  className,
  children,
}) {
  return (
    <div className={clsx(className, "flex gap-2 items-center relative")}>
      <Image
        src={imageSrc}
        alt="avatar"
        className="rounded-full w-12 h-12 object-cover"
      />
      {children}
      <div className="text-left leading-tight overflow-hidden">
        <div className="text-lg text-teal-600 truncate">{name}</div>
        <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
      </div>
    </div>
  );
}
