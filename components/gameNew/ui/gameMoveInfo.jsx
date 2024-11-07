import { GameSymbol } from "./GameSymbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <span className="flex items-center text-xl font-semibold gap-1">
        Ход:
        <GameSymbol size="lg" symbol={currentMove} />
      </span>
      <span className="flex items-center text-slate-400 gap-1">
        Следующий:
        <GameSymbol symbol={nextMove} />
      </span>
    </>
  );
}
