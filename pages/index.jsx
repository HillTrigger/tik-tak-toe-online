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
          placeholder="PlaceHolder"
          helperText="HelperText"
        />
        <UiSelectField
          label="Select Option"
          helperText="Выбирите режим игры"
          options={[
            { value: "1", label: "Без таймера" },
            { value: "2", label: "1 минута" },
            { value: "3", label: "3 минуты" },
          ]}
          // onChange={(value) => setSelectedValue(value)}
          // errorText="This field is required"
          // helperText="Please select an option"
          // required
          // placeholder="Choose an option"
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
