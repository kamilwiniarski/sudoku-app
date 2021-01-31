import { startingPoints } from "../data/constants";
import { SudokuBoard, SudokuBoardRow } from "../types/board.type";

const peerSquareTransform = (sudoku: SudokuBoard): SudokuBoard => {
  return startingPoints.map(
    ([row, col]: number[]): SudokuBoardRow => {
      const transformedArray = [];
      for (let i = 0; i <= 2; i++) {
        transformedArray.push(
          sudoku[row + i][col],
          sudoku[row + i][col + 1],
          sudoku[row + i][col + 2]
        );
      }
      return transformedArray;
    }
  );
};

export default peerSquareTransform;
