import { UiFieldLabel } from "./UiFieldLabel";
import { UiFieldMessage } from "./UiFieldMessage";
import { UiFieldInput } from "./UiFieldInput";

/**
 * @param {{
 *   label: string,
 *   required: boolean,
 *   errorText?: string,
 *   helperText?: string,
 *   inputProps: object,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 * @returns {JSX.Element}
 * A composed text field component using UiFieldLabel, UiFieldMessage, and UiFieldInput.
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
      {label && <UiFieldLabel label={label} required={required} />}
      <UiFieldInput errorText={errorText} required={required} {...inputProps} />
      <UiFieldMessage errorText={errorText} helperText={helperText} />
    </div>
  );
}
