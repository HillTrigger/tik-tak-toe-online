import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState({ playersCount }) {
  const [{ cells, currentMove }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  });

  const nextMove = getNextMove(currentMove, playersCount);
  const winnerSequence = computeWinner(cells);
  console.log(winnerSequence);
  const handleClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleClick,
    playersCount,
    winnerSequence,
  };
}
