import { Status } from "../data/status.enum";

export type RawSudokuBoardCell = number | null;
export type RawSudokuBoardRow = RawSudokuBoardCell[];
export type RawSudokuBoard = RawSudokuBoardRow[];

export type SudokuBoardCell = {
  value: RawSudokuBoardCell;
  isPrefilled: boolean;
  isError: boolean;
};

export type SudokuBoardRow = SudokuBoardCell[];

export type SudokuBoard = SudokuBoardRow[];

export type SudokuBoardWithStatus = {
  sudokuBoard: SudokuBoard;
  status: Status;
};
