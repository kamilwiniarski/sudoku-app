import {
  SudokuBoard,
  SudokuBoardCell,
  SudokuBoardRow,
} from "../types/board.type";

const transpose = (sudoku: SudokuBoard): SudokuBoard => {
  return sudoku[0].map((cell: SudokuBoardCell, idx: number) =>
    sudoku.map((cell: SudokuBoardRow) => cell[idx])
  );
};

export default transpose;
