import {
  completeBoard,
  completeBoardPeerSquareTransformed,
} from "../data/testData";
import peerSquareTransform from "./validateSquaresUtils";

test("function called with 2D matrix should return transformed version of input matrix", () => {
  const peerSquareTransformed = peerSquareTransform(completeBoard);
  expect(peerSquareTransformed).toEqual(completeBoardPeerSquareTransformed);
});
