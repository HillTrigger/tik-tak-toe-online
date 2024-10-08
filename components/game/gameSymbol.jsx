import { SYMBOL_X, SYMBOL_O } from "./constans";

//Компонент для генерации нужного символа, который передан в эту функцию и добавление подходящего ей класса для изменения цвета
export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-600";
    if (symbol === SYMBOL_X) return "text-red-600";
    return "";
  };

  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
  );
}
