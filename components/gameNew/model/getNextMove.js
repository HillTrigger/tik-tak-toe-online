import { MOVE_ORDER } from "../constants";

// state.currentMove,
//           state.PLAYERS_COUNT,
//           state.playersTimeOver,
export function getNextMove({ currentMove, PLAYERS_COUNT, playersTimeOver }) {
  // const {  } = state;
  const slicedMoveOrder = MOVE_ORDER.slice(0, PLAYERS_COUNT).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
