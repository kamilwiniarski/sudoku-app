import { SudokuBoard } from "../types/board.type";

const isSudokuComplete = (sudoku: SudokuBoard): boolean => {
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j].value === null) {
        return false;
      }
    }
  }

  return true;
};

export default isSudokuComplete;
