export function getWinnerSymbol(nextMove, currentMove, cells, winnerSequence) {
  return nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];
}
