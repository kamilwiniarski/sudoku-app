import { Status } from "../data/status.enum";
import {
  RawSudokuBoard,
  RawSudokuBoardCell,
  RawSudokuBoardRow,
  SudokuBoard,
} from "../types/board.type";
import validateTable from "./validateBoard";

const isJsonString = (input: string): boolean => {
  try {
    JSON.parse(input);
  } catch (e) {
    return false;
  }
  return true;
};

const areElementsCorrectArrays = (input: RawSudokuBoard): boolean => {
  for (let i = 0; i < input.length; i++) {
    if (!Array.isArray(input[i]) || !(input[i].length === 9)) {
      return false;
    }
  }
  return true;
};

const isEitherDigitOrNull = (input: RawSudokuBoard): boolean => {
  const includesIn = (value: any): boolean =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, null].includes(value);
  for (let i = 0; i < input.length; i++) {
    if (!input[i].every(includesIn)) {
      return false;
    }
  }
  return true;
};

const createBoardFromInput = (input: RawSudokuBoard): SudokuBoard => {
  return input.map((row: RawSudokuBoardRow) => {
    return row.map((cell: RawSudokuBoardCell) => ({
      value: cell,
      isPrefilled: false,
      isError: false,
    }));
  });
};

const isSolvable = (input: RawSudokuBoard): boolean => {
  const { status } = validateTable(createBoardFromInput(input));
  return status !== Status.ERRORS;
};

const isInputValid = (input: string): boolean => {
  if (!isJsonString(input)) {
    return false;
  }
  const parsedInput = JSON.parse(input);
  if (!Array.isArray(parsedInput)) {
    return false;
  }
  if (parsedInput.length !== 9) {
    return false;
  }
  if (!areElementsCorrectArrays(parsedInput)) {
    return false;
  }
  if (!isEitherDigitOrNull(parsedInput)) {
    return false;
  }
  if (!isSolvable(parsedInput)) {
    return false;
  }
  return true;
};

export default isInputValid;
