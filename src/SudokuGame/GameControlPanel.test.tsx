import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import GameHeader from "./GameControlPanel";

const onValidate = jest.fn();
const onReset = jest.fn();
const onStart = jest.fn();
const inputValue = "test";
const emptyInputValue = "";
const onInputValueChange = jest.fn();

const GameHeaderWithProps = (
  <GameHeader
    onValidate={onValidate}
    onReset={onReset}
    onStart={onStart}
    inputValue={inputValue}
    onInputValueChange={onInputValueChange}
  />
);
const GameHeaderWithEmptyInput = (
  <GameHeader
    onValidate={onValidate}
    onReset={onReset}
    onStart={onStart}
    inputValue={emptyInputValue}
    onInputValueChange={onInputValueChange}
  />
);

test("renders 'validate' button correctly", () => {
  render(GameHeaderWithProps);
  const button = screen.getByTestId("validate-button");
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe("Validate");
});

test("renders 'reset' button correctly", () => {
  render(GameHeaderWithProps);
  const button = screen.getByTestId("reset-button");
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe("Reset");
});

test("renders 'start' button correctly", () => {
  render(GameHeaderWithProps);
  const button = screen.getByTestId("start-button");
  expect(button).toBeInTheDocument();
  expect(button.textContent).toBe("Start from input");
});

test("renders InputWrapper correctly", () => {
  render(GameHeaderWithProps);
  const inputWrapper = screen.getByTestId("input-wrapper");
  expect(inputWrapper).toBeInTheDocument();
});

test("'validate' button is clickable", () => {
  render(GameHeaderWithProps);
  const button = screen.getByTestId("validate-button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(onValidate).toBeCalledTimes(1);
});

test("'reset' button is clickable", () => {
  render(GameHeaderWithProps);
  const button = screen.getByTestId("reset-button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(onReset).toBeCalledTimes(1);
});

test("'start' button is clickable when valid input provided", () => {
  render(GameHeaderWithProps);
  const button = screen.getByTestId("start-button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(onStart).toBeCalledTimes(1);
});

test("'start' button is disabled when no input provided", () => {
  render(GameHeaderWithEmptyInput);
  const button = screen.getByTestId("start-button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(onStart).toBeCalledTimes(0);
});
