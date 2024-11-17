import Image from "next/image";
import { GameSymbol } from "./GameSymbol";
import clsx from "clsx";
import { useNow } from "../../lib/timers";

export function PlayerInfo({
  className,
  avatar,
  name,
  rating,
  isRight,
  symbol,
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
  const seconds = Math.ceil(mils / 1000);

  const stringMinuts = String(Math.floor(seconds / 60)).padStart(2, "0");
  const stringSeconds = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds <= 10;

  function getTimerColor() {
    if (timerStartAt) {
      return isDanger && "text-orange-600";
    }
    return "text-slate-200";
  }

  return (
    <div className="relative flex gap-3 items-center">
      <div
        className={clsx(
          className,
          "flex gap-2 items-center relative w-44",
          isRight && "order-3",
        )}
      >
        <Image
          src={avatar}
          alt="avatar"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
        <div className="text-left leading-tight overflow-hidden">
          <div className="text-lg text-teal-600 truncate">{name}</div>
          <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
        </div>
      </div>
      <div className="h-6 w-px bg-slate-200" />
      <span
        className={clsx(
          "flex text-lg font-semibold w-[60px]",
          isRight && "-order-1",
          getTimerColor(),
        )}
      >
        {stringMinuts}:{stringSeconds}
      </span>
    </div>
  );
}
