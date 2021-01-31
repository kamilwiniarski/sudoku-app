import {
  boardWithSpecificErrors,
  completeBoard,
  completeBoardWitErrors,
  rawCompleteBoard,
} from "../data/testData";
import { Status } from "../data/status.enum";
import validateBoard, {
  checkForErrors,
  mapBoardToValues,
} from "./validateBoard";

test("function called with board containing errors should return Status.ERRORS", () => {
  const { status } = validateBoard(completeBoardWitErrors);
  expect(status).toBe(Status.ERRORS);
});

test("function called with board containing errors should mark all wrong fields as errored", () => {
  const [[el1, el2]] = checkForErrors(boardWithSpecificErrors);
  expect(el1.isError).toBe(true);
  expect(el2.isError).toBe(true);
});

test("function called with sudoku board should map input to RawSudokuBoard", () => {
  const mappedSudokuBoard = mapBoardToValues(completeBoard);
  expect(mappedSudokuBoard).toEqual(rawCompleteBoard);
});
