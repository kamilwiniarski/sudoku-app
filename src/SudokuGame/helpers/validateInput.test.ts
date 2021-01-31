import {
  rawBoard,
  rawCorruptedBoard,
  rawCompleteBoard,
} from "../data/testData";
import isInputValid from "./validateInput";

const stringifiedBoard = JSON.stringify(rawBoard);
const stringifiedCorructedBoard = JSON.stringify(rawCorruptedBoard);
const stringifiedCompleteBoard = JSON.stringify(rawCompleteBoard);

test("function called with valid sudoku board data should return true", () => {
  const isValid = isInputValid(stringifiedBoard);
  expect(isValid).toBe(true);
});

test("function called with non-json string should return false", () => {
  const testString = "console.log('test')";
  const isValid = isInputValid(testString);
  expect(isValid).toBe(false);
});

test("function called with string not parsed to array should return false", () => {
  const testString = "test123";
  const isValid = isInputValid(testString);
  expect(isValid).toBe(false);
});

test("function called with array of length other than 9 should return false", () => {
  const testString = "[1, 2, 4]";
  const isValid = isInputValid(testString);
  expect(isValid).toBe(false);
});

test("function called with array of length other than 9 should return false", () => {
  const testString = "[1, 2, 4]";
  const isValid = isInputValid(testString);
  expect(isValid).toBe(false);
});

test("function called with corrupted array should return false", () => {
  const isValid = isInputValid(stringifiedCorructedBoard);
  expect(isValid).toBe(false);
});

test("function called with non-solvable board should return false", () => {
  const isValid = isInputValid(stringifiedCompleteBoard);
  expect(isValid).toBe(false);
});
