import { completeBoardPrefilled, rawCompleteBoard } from "../data/testData";
import { mapInitialBoard } from "./getInitialBoardWithStatus";

test("function called with raw sudoku board should return sudoku board", () => {
  const mappedBoard = mapInitialBoard(rawCompleteBoard);
  expect(mappedBoard).toEqual(completeBoardPrefilled);
});
