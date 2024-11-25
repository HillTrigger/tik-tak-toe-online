import clsx from "clsx";

/**
 * @param {{
 *   label: string,
 *   required: boolean,
 * }} props
 * @returns {JSX.Element}
 * Component for rendering a label with optional "required" indicator.
 */
export function UiFieldLabel({ label, required }) {
  return (
    <label
      htmlFor="example2"
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
      )}
    >
      {label}
    </label>
  );
}
