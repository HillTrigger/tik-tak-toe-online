import { useGameState } from "./useGameState";
import { GameCell } from "./GameCell";
import { GameInfo } from "./GameInfo";
import { ResetButton } from "./resetButton";
import { GameGrid } from "./GameGrid";

export function Game() {
  const { cells, currentStep, winnerSequence, handleClick, clearGame } =
    useGameState();

  return (
    <div className="flex flex-col items-center w-40 my-24 mx-auto pt-px pl-px mb-2 border border-black">
      <GameInfo
        cells={cells}
        winnerSequence={winnerSequence}
        currentStep={currentStep}
      />
      <GameGrid>
        {
          //проходим по массиву cells для создания нового массива, реакт добавляет все части массива на страницу по порядку, поэтому так можно сформировать список
          cells.map((symbol, index) => {
            return (
              <GameCell
                symbol={symbol}
                key={index} //реакт требует добавление уникального индификатора для списков
                isWinner={winnerSequence ? winnerSequence.includes(index) : ""}
                onClick={() => handleClick(index)}
              />
            );
          })
        }
      </GameGrid>
      <ResetButton onClick={clearGame} />
    </div>
  );
}
