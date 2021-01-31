type InputWrapperProps = {
  inputValue: string;
  onChange: (value: string) => void;
};

const InputWrapper = ({ inputValue, onChange }: InputWrapperProps) => {
  return (
    <label htmlFor="custom-start-point" data-testid="input-wrapper">
      <textarea
        id="custom-start-point"
        data-testid="textarea"
        placeholder="Provide valid 2D array containing digits and nulls to start a game..."
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        cols={30}
      />
    </label>
  );
};

export default InputWrapper;
