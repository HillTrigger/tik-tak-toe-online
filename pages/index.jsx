import { Header } from "../components/header";
import { Game } from "../components/gameNew/index";

export default function HomePage() {
  return (
    <>
      <HomePageLayout header={<Header />}>
        <Game />
      </HomePageLayout>
    </>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="max-w-max mx-auto">{children}</main>
    </div>
  );
}
