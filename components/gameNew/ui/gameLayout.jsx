export function GameLayout({
  BackLink,
  GameTitle,
  GameInfo,
  playersList,
  gameMoveInfo,
  gameCells,
}) {
  return (
    <div>
      <div className="mt-6 text-nowrap max-w-[304px]">
        {<BackLink />}
        {<GameTitle />}
        {<GameInfo isRatingGame playersCount={2} timeMode={"1 мин на ход"} />}
      </div>
      <div className="mt-4 bg-white rounded-lg shadow px-8 py-4 justify-between grid grid-cols-2 gap-x-10 gap-y-3">
        {playersList}
      </div>
      <div className="mt-6 bg-white rounded-lg shadow pt-5 px-8 pb-7">
        <div className="flex">
          <div>{gameMoveInfo}</div>
          <div className="ml-auto flex items-center leading-tight gap-3">
            {/* {actions} */}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pr-px pb-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
