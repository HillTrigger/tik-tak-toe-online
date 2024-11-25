import { UiFieldLabel } from "./UiFieldLabel";
import { UiFieldMessage } from "./UiFieldMessage";
import { UiSelect } from "./UiSelect";

/**
 * @param {{
 *   options: Array<{ value: string, label: string }>,
 *   errorText?: string,
 *   helperText?: string,
 *   label?: string,
 *   required?: boolean,
 * }} props
 * @returns {JSX.Element}
 */
export function UiSelectField({
  options,
  errorText,
  helperText,
  label,
  required,
}) {
  return (
    <div>
      {/* Label Component */}
      {label && <UiFieldLabel label={label} required={required} />}

      {/* Select Component */}
      <UiSelect errorText={errorText} options={options} />

      {/* Message Component for Error or Helper Text */}
      <UiFieldMessage errorText={errorText} helperText={helperText} />
    </div>
  );
}
