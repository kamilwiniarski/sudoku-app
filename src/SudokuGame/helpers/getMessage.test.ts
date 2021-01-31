import { Status } from "../status.enum";
import getMessage from "./getMessage";

const statusCompleted = Status.COMPLETED;
const statusCompletedMessage = "Congrats, you did it!";

test("function called with statusCompleted should return statusCompletedMessage", () => {
  const errorMessage = getMessage(statusCompleted);
  expect(errorMessage).toBe(statusCompletedMessage);
});

test("function called without argument should return empty string", () => {
  const errorMessage = getMessage();
  expect(errorMessage).toBe("");
});
