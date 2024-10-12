import { GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <>
      <header className="bg-white min-w-screen">
        <Header />
      </header>
      <main className="max-w-[616px] mx-auto bg-slate-50">
        <GameTitle className={"ml-2"} />
        <GameInfo />
      </main>
    </>
  );
}
