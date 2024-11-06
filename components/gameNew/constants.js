import avatar from "./ui/images/avatar.jpeg";
import avatar2 from "./ui/images/avatar2.jpg";
import avatar3 from "./ui/images/avatar3.jpg";
import avatar4 from "./ui/images/avatar4.jpg";

export const GAME_SYMBOLS = {
  CROSS: "CROSS",
  NOUGHT: "NOUGHT",
  TRIANGLE: "TRIANGLE",
  SQUARE: "SQUARE",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.NOUGHT,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatar,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: "850",
    avatar: avatar2,
    symbol: GAME_SYMBOLS.NOUGHT,
  },
  {
    id: 3,
    name: "Lara",
    rating: "1400",
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: "760",
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
