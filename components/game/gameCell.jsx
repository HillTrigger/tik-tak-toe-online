import { GameSymbol } from "./GameSymbol";
import clsx from "clsx";

export function GameCell({ isWinner, onClick, symbol, index }) {
  return (
    <button
      onClick={onClick} //добавление обрабочика нажатия по кнопке
      className={clsx(
        "border border-gray-500 -mt-px -ml-px items-center flex justify-center",
        isWinner && "bg-red-400 bg-opacity-20"
      )}
      //если isWinner существует, то окрашиваем клетку в красный, если нет то ничего не делаем
    >
      {
        symbol ? <GameSymbol symbol={symbol} /> : null //отрисовываем символ, если symbol не равен null
      }
    </button>
  );
}
