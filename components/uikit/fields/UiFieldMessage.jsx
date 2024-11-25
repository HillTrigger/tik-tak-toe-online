import clsx from "clsx";

/**
 * @param {{
 *   errorText?: string,
 *   helperText?: string,
 * }} props
 * @returns {JSX.Element | null}
 * Component for rendering error or helper messages below an input field.
 */
export function UiFieldMessage({ errorText, helperText }) {
  if (!errorText && !helperText) return null;

  return (
    <p
      className={clsx(
        errorText ? "text-orange-600" : "text-slate-400",
        "mt-1 text-sm",
      )}
    >
      {errorText ?? helperText}
    </p>
  );
}
