import { GAME_SYMBOLS } from "./constants";
import { Cross } from "./icons/Cross";
import { Nought } from "./icons/Nought";
import { Square } from "./icons/square";
import { Triangle } from "./icons/triangle";

/**
 * @param {{
 * symbol: object,
 * size: 'lg',
 * }} props
 */

export function GameSymbol({ symbol, size }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: Cross,
      [GAME_SYMBOLS.NOUGHT]: Nought,
      [GAME_SYMBOLS.TRIANGLE]: Triangle,
      [GAME_SYMBOLS.SQUARE]: Square,
    }[symbol] ?? Cross;

  return <Icon size={size} />;
}
