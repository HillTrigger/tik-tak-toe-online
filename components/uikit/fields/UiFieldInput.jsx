import clsx from "clsx";

/**
 * @param {{
 *   errorText?: string,
 *   required: boolean,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 * @returns {JSX.Element}
 * Component for rendering an input field with configurable styles and attributes.
 */
export function UiFieldInput({ errorText, required, ...inputProps }) {
  return (
    <input
      type="email"
      id="example2"
      required={required}
      className={clsx([
        `outline-none
          block w-full rounded-md shadow-sm border
          focus:ring-opacity-50 disabled:cursor-not-allowed 
          disabled:bg-gray-50 disabled:text-gray-500
          text-sm py-2 px-2
        `,
        errorText
          ? "border-orange-600 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-600 focus:ring-opacity-50"
          : "focus:border-primary-400 focus:ring focus:ring-primary-200 border-slate-200",
      ])}
      {...inputProps}
    />
  );
}
