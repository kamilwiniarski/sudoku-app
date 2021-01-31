import { Status } from "../data/status.enum";
import {
  RawSudokuBoard,
  RawSudokuBoardCell,
  RawSudokuBoardRow,
  SudokuBoard,
  SudokuBoardCell,
  SudokuBoardRow,
  SudokuBoardWithStatus,
} from "../types/board.type";
import transpose from "./validateRowsUtils";
import peerSquareTransform from "./validateSquaresUtils";

let status: Status;

const setStatus = (newStatus: Status): void => {
  status = newStatus;
};

const mapBoardToValues = (sudokuBoard: SudokuBoard): RawSudokuBoard => {
  return sudokuBoard.map((row: SudokuBoardRow) => {
    return row.map((cell: SudokuBoardCell) => cell.value);
  });
};

const checkForErrors = (sudokuBoard: SudokuBoard): SudokuBoard => {
  mapBoardToValues(sudokuBoard).forEach(
    (row: RawSudokuBoardRow, idx: number) => {
      const filteredRow = row.filter(
        (cell: RawSudokuBoardCell) => cell !== null
      ) as number[];
      const results: number[] = [];
      for (let i = 0; i < filteredRow.length - 1; i++) {
        if (
          results.indexOf(filteredRow[i]) === -1 &&
          filteredRow.indexOf(filteredRow[i], i + 1) !== -1
        ) {
          results.push(filteredRow[i]);
        }
      }
      if (results.length) {
        results.forEach((result: number) => {
          sudokuBoard[idx].forEach((cell: SudokuBoardCell) => {
            if (cell.value === result && !cell.isPrefilled) {
              cell.isError = true;
            }
          });
        });
        setStatus(Status.ERRORS);
      }
    }
  );
  return sudokuBoard;
};

const validateRows = (sudokuBoard: SudokuBoard): SudokuBoard => {
  return checkForErrors(sudokuBoard);
};

const validateColumns = (sudokuBoard: SudokuBoard): SudokuBoard => {
  return transpose(checkForErrors(transpose(sudokuBoard)));
};

const validateSquares = (sudokuBoard: SudokuBoard): SudokuBoard => {
  return peerSquareTransform(checkForErrors(peerSquareTransform(sudokuBoard)));
};

const validateBoard = (sudokuBoard: SudokuBoard): SudokuBoardWithStatus => {
  setStatus(Status.IN_PROGRESS);
  return {
    sudokuBoard: validateSquares(validateColumns(validateRows(sudokuBoard))),
    status,
  };
};

export { mapBoardToValues, checkForErrors };

export default validateBoard;
