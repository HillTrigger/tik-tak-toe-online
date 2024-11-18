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
import { useCallback, useMemo, useReducer } from "react";
import { computeWinner } from "./model/computeWinner.js";
import { getNextMove } from "./model/getNextMove.js";
import { computePlayerTimer } from "./model/computePlayerTimer.js";
import { useInterval } from "../lib/timers.js";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { PLAYERS_COUNT, defaultTimer: 10000, currentMoveStart: Date.now() },
    initGameState,
  );
  console.log("render");

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({ type: GAME_STATE_ACTIONS.TICK, now: Date.now() });
    }, []),
  );

  const winnerSequence = useMemo(
    () => computeWinner(gameState.cells),
    [gameState],
  );
  const handleClickCell = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      payload: { index, now: Date.now() },
    });
  }, []);

  const nextMove = getNextMove(gameState);

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
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              symbol={player.symbol}
              name={player.name}
              rating={player.rating}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((symbol, index) => {
          return (
            <GameCell
              symbol={symbol}
              isWinnerCells={winnerSequence?.includes(index)}
              isWinner={!!winnerSymbol}
              onClick={handleClickCell}
              key={index}
              index={index}
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
            timer={gameState.timers[player.symbol]}
            isTimerRunning={false}
          />
        ))}
      />
    </>
  );
}
