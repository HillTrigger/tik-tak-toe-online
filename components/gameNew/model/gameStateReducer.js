import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export function gameStateReducer(state, action) {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK:
      if (state.cells[action.payload.index]) {
        return state;
      }
      return {
        ...state,
        currentMove: getNextMove(
          state.currentMove,
          state.PLAYERS_COUNT,
          state.playersTimeOver,
        ),
        cells: state.cells.map((cell, i) =>
          i === action.payload.index ? state.currentMove : cell,
        ),
      };

    default:
      return state;
  }
}

export const initGameState = ({ PLAYERS_COUNT }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersTimeOver: [],
  PLAYERS_COUNT: PLAYERS_COUNT,
});
