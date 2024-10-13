import clsx from "clsx";
import { Cross } from "./icons/Cross";
import { Nought } from "./icons/Nought";
import { UiButton } from "../uikit/ui-button";

export function GameField({ className }) {
  const cells = new Array(19 * 19).fill(null);

  return (
    <div
      className={clsx(className, " bg-white rounded-lg shadow pt-5 px-8 pb-7")}
    >
      <div className="flex">
        <div>
          <span className="flex items-center text-xl font-semibold gap-1">
            Ход:
            <Nought size="lg" />
          </span>
          <span className="flex items-center text-slate-400 gap-1">
            Следующий:
            <Cross />
          </span>
        </div>
        <div className="ml-auto flex items-center leading-tight gap-3">
          <UiButton color="primary" size="mg">
            Ничья
          </UiButton>
          <UiButton color="outline" size="mg">
            Сдаться
          </UiButton>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pr-px pb-px mt-3">
        {cells.map((_, i) => {
          return (
            <button
              key={i}
              className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
            >
              <Nought size="lg" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
