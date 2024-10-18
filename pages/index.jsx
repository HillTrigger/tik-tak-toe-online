import { useState } from "react";
import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount] = useState(4);

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <main className="max-w-max mx-auto">
          <GameTitle playersCount={playersCount} className={"ml-2 mt-6"} />
          <GameInfo playersCount={playersCount} className={"mt-4"} />
          <GameField playersCount={playersCount} className={"mt-6"} />
        </main>
      </div>
    </>
  );
}
