import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";

export function GameCell({ symbol, onClick, isWinnerCells, isWinner }) {
  return (
    <button
      disabled={isWinner}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinnerCells && "bg-orange-600/30",
      )}
    >
      {symbol && <GameSymbol symbol={symbol ?? ""} size="lg" />}
    </button>
  );
}
