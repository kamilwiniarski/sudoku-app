import { completeBoard, incompleteBoard } from "../data/testData";
import isSudokuComplete from "./checkCompletion";

test("function called with completed board should return true", () => {
  const isCompleted = isSudokuComplete(completeBoard);
  expect(isCompleted).toBe(true);
});

test("function called with incomplete board should return false", () => {
  const isCompleted = isSudokuComplete(incompleteBoard);
  expect(isCompleted).toBe(false);
});
