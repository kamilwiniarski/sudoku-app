import styled from "styled-components";
import {
  SudokuBoard,
  SudokuBoardCell,
  SudokuBoardRow,
} from "./types/board.type";
import { BoardCellPosition, BoardCellStyle } from "./types/cell.type";
import Picker from "./Picker";

const Board = styled.table`
  border-collapse: collapse;
  border: 3px solid #333;
  flex: 0 0 837px;
`;

const BoardRow = styled.tr`
  &:nth-child(3n) {
    border-bottom: 3px solid #333;
  }
`;

const BoardCell = styled.td<BoardCellStyle>`
  border: 1px solid #333;
  width: 91px;
  height: 91px;
  font-size: 32px;
  font-weight: ${({ isPrefilled }) => (isPrefilled ? "700" : "400")};
  color: ${({ isError }) => (isError ? "red" : "#333")};
  cursor: ${({ isPrefilled }) => (isPrefilled ? "initial" : "pointer")};
  background-color: ${({ isSelected }) =>
    isSelected ? "#a89243" : "transparent"};
  text-align: center;
  vertical-align: middle;

  &:nth-child(3n) {
    border-right: 3px solid #333;
  }
`;

type SudokuBoardTableProps = {
  sudokuBoardValues: SudokuBoard;
  selected: BoardCellPosition;
  onPick: (
    e: React.MouseEvent<HTMLTableDataCellElement>,
    value: number
  ) => void;
  onSelect: (pos: BoardCellPosition) => void;
};

const SudokuBoardTable = ({
  sudokuBoardValues,
  selected,
  onPick,
  onSelect,
}: SudokuBoardTableProps) => {
  const isSelected = (pos1: BoardCellPosition, pos2: BoardCellPosition) => {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1];
  };
  return (
    <Board>
      <tbody>
        {sudokuBoardValues.map((row: SudokuBoardRow, rowIdx: number) => (
          <BoardRow key={rowIdx}>
            {row.map((cell: SudokuBoardCell, cellIdx: number) => (
              <BoardCell
                key={`${rowIdx}-${cellIdx}`}
                isSelected={isSelected(selected, [rowIdx, cellIdx])}
                isError={cell.isError}
                isPrefilled={cell.isPrefilled}
                onClick={
                  !cell.isPrefilled
                    ? () => onSelect([rowIdx, cellIdx])
                    : () => {}
                }
              >
                {isSelected(selected, [rowIdx, cellIdx]) ? (
                  <Picker onPick={onPick} />
                ) : (
                  <span>{cell.value}</span>
                )}
              </BoardCell>
            ))}
          </BoardRow>
        ))}
      </tbody>
    </Board>
  );
};

export default SudokuBoardTable;
