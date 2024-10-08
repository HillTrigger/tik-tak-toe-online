import { useGameState } from "./useGameState";
import { GameCell } from "./gameCell";
import { GameInfo } from "./gameInfo";

export function Game() {
  const {
    cells,
    computeWinner,
    currentStep,
    winnerSequence,
    handleClick,
    clearGame,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 my-24 mx-auto pt-px pl-px mb-2 border border-black border-solid">
      <GameInfo
        cells={cells}
        winnerSequence={winnerSequence}
        currentStep={currentStep}
      />
      <div className="grid grid-cols-[repeat(3,30px)] grid-rows-[repeat(3,30px)]">
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
      </div>
      <button
        className="border border-gray-500 mt-3 rounded-lg px-1"
        onClick={clearGame}
      >
        Очистить
      </button>
    </div>
  );
}
