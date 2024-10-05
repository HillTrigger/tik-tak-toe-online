import { useState } from "react";
import { SYMBOL_X, SYMBOL_O } from "./constans";

export function useGameState() {
  const computeWinner = (cells) => {
    //выйгрышные комбинации
    const lines = [
      [0, 1, 2], // первая горизонталь
      [3, 4, 5], // вторая горизонталь
      [6, 7, 8], // третья горизонталь
      [0, 3, 6], // первый столбец
      [1, 4, 7], // второй столбец
      [2, 5, 8], // третий столбец
      [0, 4, 8], // главная диагональ
      [2, 4, 6], // побочная диагональ
    ];

    //проходим по всем комбинациям сравнивая каждый элемент в cells между собой
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // Проверяем, все ли три клетки равны и не равны null или undefined
      if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
        return [a, b, c]; //если возвращается true то возвращаем выйгрышную комбинацию
      }
    }
    return false; // иначе возвращаем false
  };

  //начальное состояние поля
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  //текущий ход --по умолчанию О
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  //создание переменной для запоминания победителя
  const [winnerSequence, setWinnerSequence] = useState();

  //Функция обработчик нажатия по клетке
  const handleClick = (index) => {
    if (cells[index] || winnerSequence) return;

    const cellsCopy = cells.slice(); //создание копии массива
    cellsCopy[index] = currentStep; //меняем в массиве null на currentStep

    const winner = computeWinner(cellsCopy); //проверяем есть ли победители, проверяя скопированный массив на выйгрышные комбинации
    setCells(cellsCopy); //перезаписываем Cells с помощью useState чтобы реакт сделал новый рендер элемента
    setWinnerSequence(winner); //записываем выйгрышную комбинацию
    if (winner) return; //если победитель уже есть, текущий ход оставляем неизменным
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O); // меняем текущий ход на противоположный
  };

  const clearGame = () => {
    const cellsNull = Array.from({ length: 9 }, () => null);
    setCells(cellsNull); //заменяем старый массив на пустой
    setWinnerSequence(null); //забываем побежителя
  };

  return {
    cells,
    computeWinner,
    currentStep,
    winnerSequence,
    handleClick,
    clearGame,
  };
}
