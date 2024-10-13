import clsx from "clsx";

export function UiButton({ children, color, size }) {
  const className = clsx(
    "transition-colors leading-tight border-2",
    {
      primary: "text-white bg-teal-600 hover:bg-teal-500",
      outline:
        "text-teal-600 border border-teal-600 bg-white hover:bg-gray-300",
    }[color],
    {
      lg: "text-2xl rounded-lg px-12 py-2",
      mg: "rounded-sm text-sm px-6 py-2",
    }[size],
  );
  return <button className={className}>{children}</button>;
}
