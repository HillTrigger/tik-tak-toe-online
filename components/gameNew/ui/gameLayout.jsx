import clsx from "clsx";

export function GameLayout({
  className,
  BackLink,
  GameTitle,
  GameInfo,
  playersList,
}) {
  return (
    <div>
      <div className={clsx(className, "text-nowrap max-w-[304px]")}>
        {<BackLink />}
        {<GameTitle />}
        {<GameInfo isRatingGame playersCount={4} timeMode={"1 мин на ход"} />}
      </div>
      <div
        className={clsx(
          className,
          "bg-white rounded-lg shadow px-8 py-4 grid grid-cols-2 gap-x-10 gap-y-3",
        )}
      >
        {playersList}
      </div>
    </div>
  );
}
