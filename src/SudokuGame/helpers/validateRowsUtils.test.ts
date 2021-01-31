import { completeBoard, completeBoardTransposed } from "../data/testData";
import transpose from "./validateRowsUtils";

test("function called with 2D matrix should return transposed version of input matrix", () => {
  const transpose2DMatrix = transpose(completeBoard);
  expect(transpose2DMatrix).toEqual(completeBoardTransposed);
});
