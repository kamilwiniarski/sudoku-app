import styled from "styled-components";
import { pickerTable } from "./data/constants";

const StyledPicker = styled.table`
  border-collapse: collapse;
  font-size: 16px;
  color: #333;
  border: none;
`;

const PickerCell = styled.td`
  border: 1px solid #333;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
`;

type PickerProps = {
  onPick: (
    e: React.MouseEvent<HTMLTableDataCellElement>,
    value: number
  ) => void;
};

const Picker = ({ onPick }: PickerProps) => {
  return (
    <StyledPicker>
      <tbody>
        {pickerTable.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((value) => (
              <PickerCell
                key={`${rowIdx}-${value}`}
                onClick={(e) => onPick(e, value)}
              >
                {value}
              </PickerCell>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledPicker>
  );
};

export default Picker;
