import React from "react";
import { render, screen } from "@testing-library/react";
import InputWrapper from "./InputWrapper";

const inputValue = "test";
const onChange = jest.fn();

const InputWrapperWithProps = (
  <InputWrapper inputValue={inputValue} onChange={onChange} />
);

test("renders textarea correctly", () => {
  render(InputWrapperWithProps);
  const textarea = screen.getByTestId("textarea");
  expect(textarea).toBeInTheDocument();
  expect(textarea.textContent).toBe(inputValue);
});
