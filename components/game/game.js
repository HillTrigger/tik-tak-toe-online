import { useGameState } from "./useGameState";
import styles from "./game.module.css";
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
    <div className={styles["game"]}>
      <GameInfo
        cells={cells}
        winnerSequence={winnerSequence}
        currentStep={currentStep}
      />
      <div className={styles["game-field"]}>
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
      <button className={styles["game-btn"]} onClick={clearGame}>
        Очистить
      </button>
    </div>
  );
}
