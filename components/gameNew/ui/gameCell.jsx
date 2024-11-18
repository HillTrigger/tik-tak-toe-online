import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";
import { memo } from "react";

export const GameCell = memo(function GameCell({
  symbol,
  onClick,
  isWinnerCells,
  isWinner,
  index,
}) {
  console.log("render cell");
  return (
    <button
      disabled={isWinner}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinnerCells && "bg-orange-600/30",
      )}
    >
      {symbol && <GameSymbol symbol={symbol ?? ""} size="lg" />}
    </button>
  );
});
