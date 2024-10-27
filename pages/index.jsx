import { useState } from "react";
import { UiModal } from "../components/uikit/UiModal";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";
import { UiButton } from "../components/uikit/UiButton";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState({
    playersCount,
  });
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <main className="max-w-max mx-auto">
          <GameTitle playersCount={playersCount} className={"ml-2 mt-6"} />
          <GameInfo
            nextMove={nextMove}
            playersCount={playersCount}
            currentMove={currentMove}
            className={"mt-4"}
            isWinner={!!winnerSymbol}
            onPlayerTimeOver={handlePlayerTimeOver}
          />
          <UiModal isOpen={winnerSymbol} onClose={() => console.log("close")}>
            <UiModal.Header>Игра завершена</UiModal.Header>
            <UiModal.Body>
              <>
                Победитель: <span className="text-teal-600">Paromovevg</span>
              </>
            </UiModal.Body>
            <UiModal.Footer>
              <UiButton size="mg" color="outline">
                Вернуться
              </UiButton>
              <UiButton size="mg" color="primary">
                Играть снова
              </UiButton>
            </UiModal.Footer>
          </UiModal>
          <GameField
            playersCount={playersCount}
            cells={cells}
            currentMove={currentMove}
            nextMove={nextMove}
            handleClick={handleClick}
            className={"mt-6"}
            winnerSequence={winnerSequence}
            winnerSymbol={winnerSymbol}
          />
        </main>
      </div>
    </>
  );
}
