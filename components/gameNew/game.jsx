import { GameTitle } from "./ui/gameTitle.jsx";
import { BackLink } from "./ui/backLink.jsx";
import { GameInfo } from "./ui/gameInfo.jsx";
import { GameLayout } from "./ui/gameLayout.jsx";
import { PLAYERS } from "./constants.js";
import { PlayerInfo } from "./ui/playerInfo.jsx";
import { GameMoveInfo } from "./ui/gameMoveInfo.jsx";
import { GameCell } from "./ui/gameCell.jsx";
import { GameOverModal } from "./ui/gameOverModal.jsx";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/gameStateReducer.js";
import { getWinnerSymbol } from "./model/getWinnerSymbol.js";
import { useReducer } from "react";
import { computeWinner } from "./model/computeWinner.js";
import { getNextMove } from "./model/getNextMove.js";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { PLAYERS_COUNT },
    initGameState,
  );

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(
    gameState.currentMove,
    PLAYERS_COUNT,
    gameState.playersTimeOver,
  );

  const { cells, currentMove } = gameState;

  const winnerSymbol = getWinnerSymbol(
    nextMove,
    currentMove,
    cells,
    winnerSequence,
  );

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        BackLink={BackLink}
        GameTitle={GameTitle}
        GameInfo={GameInfo}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            symbol={player.symbol}
            name={player.name}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
            isTimerRunning={false}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((symbol, index) => {
          return (
            <GameCell
              symbol={symbol}
              isWinnerCells={winnerSequence?.includes(index)}
              isWinner={!!winnerSymbol}
              onClick={() => {
                dispatch({
                  type: GAME_STATE_ACTIONS.CELL_CLICK,
                  payload: { index: index },
                });
              }}
              key={index}
            />
          );
        })}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            symbol={player.symbol}
            name={player.name}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
            isTimerRunning={false}
          />
        ))}
      />
    </>
  );
}
