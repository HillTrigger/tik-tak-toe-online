import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <main className="max-w-max mx-auto">
          <GameTitle className={"ml-2 mt-6"} />
          <GameInfo className={"mt-4"} />
          <GameField className={"mt-6"} />
        </main>
      </div>
    </>
  );
}
