import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentMove, nextMove, handleClick, winnerSequence } =
    useGameState({
      playersCount,
    });
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <main className="max-w-max mx-auto">
          <GameTitle playersCount={playersCount} className={"ml-2 mt-6"} />
          <GameInfo
            playersCount={playersCount}
            currentMove={currentMove}
            className={"mt-4"}
          />
          <GameField
            playersCount={playersCount}
            cells={cells}
            currentMove={currentMove}
            nextMove={nextMove}
            handleClick={handleClick}
            className={"mt-6"}
            winnerSequence={winnerSequence}
          />
        </main>
      </div>
    </>
  );
}
