import { ClockSvg } from "./icons/clockSvg";
import { LeftArrow } from "./icons/LeftArrow";
import { PeopleSvg } from "./icons/peopleSvg";
import { StarSvg } from "./icons/starSvg";
import clsx from "clsx";

export function GameTitle({ className }) {
  return (
    <div className={clsx(className, "")}>
      <div className="flex gap-2 items-center text-teal-600">
        <LeftArrow />
        На главную
      </div>
      <div className="text-4xl leading-tight">Крестики нолики</div>
      <div className="flex items-center text-xs gap-3 text-slate-400">
        <StarSvg />
        <div className="flex items-center gap-1">
          <PeopleSvg />2
        </div>
        <div className="flex items-center gap-1">
          <ClockSvg />1 мин на ход
        </div>
      </div>
    </div>
  );
}
