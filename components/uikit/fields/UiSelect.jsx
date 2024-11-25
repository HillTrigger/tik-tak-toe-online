import clsx from "clsx";

/**
 * @param {{
 *   errorText?: string,
 *   options: Array,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 * @returns {JSX.Element}
 */
export function UiSelect({ errorText, options, ...inputProps }) {
  return (
    <div class="mx-auto max-w-xs">
      <select
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
      >
        <option selected key={0} value="0">
          -
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

{
  /* <input
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
/>; */
}
