import { Header } from "../components/header";
import { Game } from "../components/gameNew/index";
import { UiTextField } from "../components/uikit/fields/UiTextField";
import { UiSelectField } from "../components/uikit/fields/UiSelectField";

export default function HomePage() {
  return (
    <>
      <HomePageLayout header={<Header />}>
        {/* <Game /> */}
        <UiTextField
          label="Создание Игры"
          required
          placeholder="Напишите название"
          helperText="Доп текст"
        />
        <UiSelectField
          required
          label="Выберите режим игры"
          helperText="Доп текст"
          errorText="Error404"
          options={[
            { value: "1", label: "Без таймера" },
            { value: "2", label: "1 минута" },
            { value: "3", label: "3 минуты" },
          ]}
        />
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
