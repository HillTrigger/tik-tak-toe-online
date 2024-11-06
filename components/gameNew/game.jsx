import { GameTitle } from "./ui/gameTitle.jsx";
import { BackLink } from "./ui/backLink.jsx";
import { GameInfo } from "./ui/gameInfo.jsx";
import { GameLayout } from "./ui/gameLayout.jsx";
import { PLAYERS } from "./constants.js";
import { PlayerInfo } from "./ui/playerInfo.jsx";

export function Game() {
  return (
    <GameLayout
      BackLink={BackLink}
      GameTitle={GameTitle}
      GameInfo={GameInfo}
      playersList={PLAYERS.map((player, index) => (
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
  );
}
