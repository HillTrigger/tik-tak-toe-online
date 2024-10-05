import styles from "./game.module.css";
import { SYMBOL_X, SYMBOL_O } from "./constans";

//Компонент для генерации нужного символа, который передан в эту функцию и добавление подходящего ей класса для изменения цвета
export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return styles["symbol--o"];
    if (symbol === SYMBOL_X) return styles["symbol--x"];
    return "";
  };

  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
  );
}
