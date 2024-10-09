return function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(3,30px)] grid-rows-[repeat(3,30px)]">
      {children}
    </div>
  );
};
