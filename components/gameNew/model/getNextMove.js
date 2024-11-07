import { MOVE_ORDER } from "../constants";

export function getNextMove(currentMove, PLAYERS_COUNT, playersTimeOver) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, PLAYERS_COUNT).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
