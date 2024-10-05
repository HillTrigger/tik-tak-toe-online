import styles from "./game.module.css";
import { GameSymbol } from "./gameSymbol";

export function GameCell({ isWinner, onClick, symbol, index }) {
  return (
    <button
      onClick={onClick} //добавление обрабочика нажатия по кнопке
      className={`${styles["cell"]} ${isWinner ? styles["cell--win"] : ""}`} //если isWinner существует, то окрашиваем клетку в красный, если нет то ничего не делаем
    >
      {
        symbol ? <GameSymbol symbol={symbol} /> : null //отрисовываем символ, если symbol не равен null
      }
    </button>
  );
}
