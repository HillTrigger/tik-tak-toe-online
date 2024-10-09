import { GameSymbol } from "./GameSymbol";

export function GameInfo({ cells, winnerSequence, currentStep }) {
  if (!cells.includes(null) && !winnerSequence) {
    return <div className="mb-3">Ничья</div>;
  }

  if (winnerSequence) {
    return (
      <div className="mb-3">
        Победитель: <GameSymbol symbol={currentStep} />
      </div>
    );
  }

  return (
    <div className="mb-3">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
