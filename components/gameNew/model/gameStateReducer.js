import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export function gameStateReducer(state, action) {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK:
      const { index, now } = action.payload;

      if (state.cells[index]) {
        return state;
      }
      return {
        ...state,
        currentMoveStart: now,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        cells: updateCell(state, index),
      };

    default:
      return state;
  }
}

export const initGameState = ({
  PLAYERS_COUNT,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersTimeOver: [],
  currentMoveStart,
  PLAYERS_COUNT,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < PLAYERS_COUNT) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

function updateCell(state, index) {
  return state.cells.map((cell, i) => (i === index ? state.currentMove : cell));
}

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];
  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}
