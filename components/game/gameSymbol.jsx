import clsx from "clsx";
import { SYMBOL_X, SYMBOL_O } from "./constans";

//Компонент для генерации нужного символа, который передан в эту функцию и добавление подходящего ей класса для изменения цвета
export function GameSymbol({ symbol }) {
  return (
    <span
      className={clsx(
        "text-xl",
        {
          [SYMBOL_O]: "text-green-600",
          [SYMBOL_X]: "text-red-600",
        }[symbol],
      )}
    >
      {symbol}
    </span>
  );
}
