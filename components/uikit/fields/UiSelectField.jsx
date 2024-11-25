import { UiFieldLabel } from "./UiFieldLabel";
import { UiFieldMessage } from "./UiFieldMessage";
import { UiSelect } from "./UiSelect";

/**
 * @param {{
 *   options: Array<{ value: string, label: string }>,
 *   value: string,
 *   onChange: (value: string) => void,
 *   errorText?: string,
 *   helperText?: string,
 *   label?: string,
 *   required?: boolean,
 *   placeholder?: string,
 * }} props
 * @returns {JSX.Element}
 * A form field for a select input, combining UiFieldLabel, UiSelect, and UiFieldMessage.
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
