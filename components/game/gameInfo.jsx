import styles from "./game.module.css";
import { GameSymbol } from "./gameSymbol";

export function GameInfo({ cells, winnerSequence, currentStep }) {
  if (!cells.includes(null) && !winnerSequence) {
    return <div className={styles["game-info"]}>Ничья</div>;
  }

  if (winnerSequence) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={currentStep} />
      </div>
    );
  }

  return (
    <div className={styles["game-info"]}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
