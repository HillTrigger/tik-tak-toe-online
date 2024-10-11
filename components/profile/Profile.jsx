import Image from "next/image";
import avatar from "./avatar.jpeg";

export default function Profile({ imageSrc, name, rating }) {
  return (
    <div className="flex gap-2 ml-auto items-center text-teal-600 hover:text-teal-500">
      <Image
        src={avatar}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="text-left leading-tight">
        <div className="text-lg">{name}</div>
        <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
      </div>
    </div>
  );
}
