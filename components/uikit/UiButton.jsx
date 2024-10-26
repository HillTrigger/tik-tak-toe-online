import clsx from "clsx";

/**
 * @param {{
 * className: string,
 * children: any,
 * className: string,
 * size: 'mg' | 'lg',
 * color: 'primary' | 'outline'
 * }} props
 *
 */

export function UiButton({ children, className, color, size }) {
  const classNameButton = clsx(
    className,
    "transition-colors leading-tight box-border hover:box-content ",
    {
      primary:
        "text-white border border-teal-600 bg-teal-600 hover:bg-teal-500",
      outline: "text-teal-600 border border-teal-600 bg-white hover:bg-teal-50",
    }[color],
    {
      lg: "text-2xl rounded-lg px-12 py-2",
      mg: "rounded-sm text-sm px-6 py-2",
    }[size],
  );
  return <button className={classNameButton}>{children}</button>;
}
