import { Profile } from "../profile";
import avatar from "./images/avatar.jpeg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";
import clsx from "clsx";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./GameSymbol";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatar,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: "850",
    avatar: avatar2,
    symbol: GAME_SYMBOLS.NOUGHT,
  },
  {
    id: 3,
    name: "Lara",
    rating: "1400",
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: "760",
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-lg shadow px-8 py-4 grid grid-cols-2 gap-x-10 gap-y-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            onTimeOver={() => onPlayerTimeOver(player.symbol)}
            key={player.id}
            playerInfo={player}
            isRight={index % 2 === 1}
            isTimerRunning={currentMove === player.symbol && !isWinner}
          />
        );
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);
  const stringMinuts = String(Math.floor(seconds / 60)).padStart(2, "0");
  const stringSeconds = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds <= 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  function getTimerColor() {
    if (isTimerRunning) {
      return isDanger && "text-orange-600";
    }
    return "text-slate-200";
  }

  return (
    <div className="relative flex gap-3 items-center">
      <Profile
        className={clsx("w-[180px]", isRight && "order-3")}
        imageSrc={playerInfo.avatar}
        name={playerInfo.name}
        rating={playerInfo.rating}
      >
        <div className="w-5 h-5 rounded-full bg-white top-0 left-0 absolute shadow flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </Profile>
      <div className="h-6 w-px bg-slate-200" />
      <span
        className={clsx(
          "flex text-lg font-semibold w-[60px]",
          isRight && "-order-1",
          getTimerColor(),
        )}
      >
        {stringMinuts}:{stringSeconds}
      </span>
    </div>
  );
}
