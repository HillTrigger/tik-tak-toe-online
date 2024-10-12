export function GameTimer() {
  return (
    <div className="max-w-[168px] text-lg font-semibold flex items-center py-3 gap-10">
      <span className="flex">
        <div className="h-6 w-px mr-3 bg-slate-200" />
        01:08
      </span>
      <span className="flex text-orange-600">
        00:08
        <div className="h-6 w-px  ml-3 bg-slate-200" />
      </span>
    </div>
  );
}
