import { useState } from "react";
import { GAME_SYMBOLS } from "../constants";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";

export function useGameState({ PLAYERS_COUNT }) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersTimeOver: [],
  });

  const nextMove = getNextMove(currentMove, PLAYERS_COUNT, playersTimeOver);
  const winnerSequence = computeWinner(cells);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

  const handleClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          PLAYERS_COUNT,
          playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          PLAYERS_COUNT,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  };
}
