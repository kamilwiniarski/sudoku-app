import styled from "styled-components";
import InputWrapper from "./InputWrapper";

const ControlPanelWrapper = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;
`;

const StyledButton = styled.button`
  font-size: 16px;
  width: 160px;
  height: 50px;
  line-height: 48px;
  background-color: none;
  border: 1px solid #a89243;
  border-radius: 4px;
  color: #a89243;
  outline: none;
  margin-bottom: 20px;
  cursor: pointer;

  &:disabled {
    border: 1px solid #333;
    color: #333;
    cursor: initial;
  }
`;

type GameControlPanelProps = {
  onValidate: () => void;
  onReset: () => void;
  onStart: () => void;
  inputValue: string;
  onInputValueChange: (value: string) => void;
};

const GameControlPanel = ({
  onValidate,
  onReset,
  onStart,
  inputValue,
  onInputValueChange,
}: GameControlPanelProps) => {
  return (
    <ControlPanelWrapper>
      <StyledButton data-testid="validate-button" onClick={onValidate}>
        Validate
      </StyledButton>
      <StyledButton data-testid="reset-button" onClick={onReset}>
        Reset
      </StyledButton>
      <StyledButton
        data-testid="start-button"
        disabled={!inputValue}
        onClick={onStart}
      >
        Start from input
      </StyledButton>
      <InputWrapper inputValue={inputValue} onChange={onInputValueChange} />
    </ControlPanelWrapper>
  );
};

export default GameControlPanel;
