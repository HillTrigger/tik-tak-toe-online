import GameTitle from "../components/game/GameTitle";
import Header from "../components/header/header";

export default function HomePage() {
  return (
    <>
      <header className="bg-slate-50 min-w-screen">
        <Header />
      </header>
      <main className="max-w-[616px] mx-auto">
        <GameTitle className={"ml-2"} />
      </main>
    </>
  );
}
