import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

export function useGameState({ playersCount }) {
  function getNextMove(currentMove) {
    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
  }

  const [{ cells, currentMove }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  });
  const nextMove = getNextMove(currentMove);

  const handleClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return { cells, currentMove, nextMove, handleClick, playersCount };
}
