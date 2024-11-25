import clsx from "clsx";
import { UiButton } from "../uikit/UiButton";
import { GameSymbol } from "./GameSymbol";

export function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleClick,
  winnerSequence,
  winnerSymbol,
}) {
  const actions = (
    <>
      <UiButton color="primary" size="mg">
        Ничья
      </UiButton>
      <UiButton color="outline" size="mg">
        Сдаться
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => {
          return (
            <GameCell
              isWinnerCells={winnerSequence?.includes(index)}
              isWinner={!!winnerSymbol}
              onClick={() => {
                handleClick(index);
              }}
              key={index}
            >
              {symbol && <GameSymbol symbol={symbol ?? ""} size="lg" />}
            </GameCell>
          );
        })}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick, isWinnerCells, isWinner }) {
  return (
    <button
      disabled={isWinner}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinnerCells && "bg-orange-600/30",
      )}
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(className, " bg-white rounded-lg shadow pt-5 px-8 pb-7")}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex">
      <div>
        <span className="flex items-center text-xl font-semibold gap-1">
          Ход:
          <GameSymbol size="lg" symbol={currentMove} />
        </span>
        <span className="flex items-center text-slate-400 gap-1">
          Следующий:
          <GameSymbol symbol={nextMove} />
        </span>
      </div>
      <div className="ml-auto flex items-center leading-tight gap-3">
        {actions}
      </div>
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pr-px pb-px mt-3">
      {children}
    </div>
  );
}
