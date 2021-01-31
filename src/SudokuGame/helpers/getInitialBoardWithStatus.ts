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

// let defaultBoardValues = [
//     [6, 2, 2, 2, 2, 3, 8, 7, 2],
//     [2, 7, 5, 3, 3, 1, 6, 3, 3],
//     [2, 3, 3, 3, 3, 2, 3, 3, 3],
//     [2, 2, 3, 3, null, 3, 9, 4, 3],
//     [2, 3, 4, 3, 3, 6, 3, 3, 1],
//     [3, 6, 9, 3, 3, 4, 3, 3, 5],
//     [3, 3, 3, 9, 3, 3, 3, 3, 3],
//     [4, 3, 2, 7, 3, 3, 1, 3, 8],
//     [3, 3, 3, 4, 3, 3, 3, null, 6],
//   ];

// let defaultBoardValues = [
//   [null, 8, 6, 2, 4, 7, 5, 1, 3],
//   [7, 5, 1, 3, 8, 6, 2, 9, 4],
//   [4, 2, 3, 5, 9, 1, 7, 8, 6],
//   [2, 4, 9, 7, 5, 8, 3, 6, 1],
//   [1, 7, 8, 6, 3, 4, 9, 2, 5],
//   [3, 6, 5, 9, 1, 2, 8, 4, 7],
//   [8, 3, 7, 4, 6, 9, 1, 5, 2],
//   [5, 1, 4, 8, 2, 3, 6, 7, 9],
//   [6, 9, 2, 1, 7, 5, 4, 3, 8],
// ];

// let defaultBoardValues = [
//   [null, 8, 6, 2, 4, 7, 5, 1, null],
//   [7, 5, 1, 3, 8, 6, 2, 9, 4],
//   [null, 2, 3, 5, 9, 1, 7, 8, null],
//   [2, 4, 9, 7, 5, 8, 3, 6, 1],
//   [1, 7, 8, 6, 3, 4, 9, 2, 5],
//   [3, 6, 5, 9, 1, 2, 8, 4, 7],
//   [8, 3, 7, 4, null, 9, 1, 5, 2],
//   [5, 1, 4, 8, 2, 3, 6, 7, 9],
//   [6, 9, 2, 1, 7, 5, 4, 3, 8],
// ];

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

/* 
[[3,null,null,null,null,null,8,7,2],[null,7,5,null,null,1,6,null,null],[null,null,null,null,null,2,null,null,3],[null,2,null,null,null,null,9,4,null],[null,null,4,3,null,6,null,null,1],[null,6,9,null,null,4,null,null,5],[null,null,null,9,null,null,null,null,null],[4,null,2,7,null,null,1,null,8],[null,null,null,4,null,null,null,2,6]]
*/
