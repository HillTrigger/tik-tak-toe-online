import { ClockSvg } from "../../game/icons/clockSvg";
import { PeopleSvg } from "../../game/icons/peopleSvg";
import { StarSvg } from "../../game/icons/starSvg";

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="flex items-center text-xs gap-3 text-slate-400">
      {isRatingGame && <StarSvg />}
      <div className="flex items-center gap-1">
        <PeopleSvg />
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <ClockSvg />
        {timeMode}
      </div>
    </div>
  );
}
