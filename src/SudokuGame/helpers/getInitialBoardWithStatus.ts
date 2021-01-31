import { Status } from "../data/status.enum";
import {
  RawSudokuBoard,
  RawSudokuBoardCell,
  RawSudokuBoardRow,
  SudokuBoard,
  SudokuBoardWithStatus,
} from "../types/board.type";
import isInputValid from "./validateInput";

let defaultBoardValues: RawSudokuBoard = [
  [6, null, null, null, null, null, 8, 7, 2],
  [null, 7, 5, null, null, 1, 6, null, null],
  [null, null, null, null, null, 2, null, null, 3],
  [null, 2, null, null, null, null, 9, 4, null],
  [null, null, 4, 3, null, 6, null, null, 1],
  [null, 6, 9, null, null, 4, null, null, 5],
  [null, null, null, 9, null, null, null, null, null],
  [4, null, 2, 7, null, null, 1, null, 8],
  [null, null, null, 4, null, null, null, 2, 6],
];

const mapInitialBoard = (input: RawSudokuBoard): SudokuBoard => {
  return input.map((row: RawSudokuBoardRow) => {
    return row.map((cell: RawSudokuBoardCell) => ({
      value: cell,
      isPrefilled: !!cell,
      isError: false,
    }));
  });
};

const getInitialBoardWithStatus = (input?: string): SudokuBoardWithStatus => {
  if (!input) {
    return {
      sudokuBoard: mapInitialBoard(defaultBoardValues),
      status: Status.PLAYING,
    };
  }
  if (!isInputValid(input)) {
    return {
      sudokuBoard: mapInitialBoard(defaultBoardValues),
      status: Status.WRONG_INPUT,
    };
  }
  defaultBoardValues = JSON.parse(input);
  return {
    sudokuBoard: mapInitialBoard(defaultBoardValues),
    status: Status.PLAYING,
  };
};

export { getInitialBoardWithStatus, mapInitialBoard };
