import clsx from "clsx";

/**
 * @param {{
 *   label: string,
 *   required: boolean,
 *   errorText?: string,
 *   helperText?: string,
 *   inputProps: object,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

export function UiTextField({
  label,
  required,
  errorText,
  helperText,
  ...inputProps
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor="example2"
          className={clsx(
            required && "after:text-orange-600 after:content-['*']",
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
          )}
        >
          {label}
        </label>
      )}
      {console.log(errorText)}
      <input
        type="email"
        id="example2"
        required={required}
        className={clsx([
          `outline-none
          block w-full rounded-md  shadow-sm border
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
      {(helperText || errorText) && (
        <p
          className={clsx(
            errorText ? "text-orange-600" : "text-slate-400",
            "mt-1 text-sm",
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}
