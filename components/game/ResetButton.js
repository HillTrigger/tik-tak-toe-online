export function ResetButton({ onClick }) {
  return (
    <button
      className="border border-gray-500 mt-3 rounded-lg px-1"
      onClick={onClick}
    >
      Очистить
    </button>
  );
}
