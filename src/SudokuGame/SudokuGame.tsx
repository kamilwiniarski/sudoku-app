import { useEffect, useState } from "react";
import styled from "styled-components";
import validateBoard from "./helpers/validateBoard";
import { getInitialBoardWithStatus } from "./helpers/getInitialBoardWithStatus";
import { BoardCellPosition } from "./types/cell.type";
import { SudokuBoard } from "./types/board.type";
import GameControlPanel from "./GameControlPanel";
import SudokuBoardTable from "./SudokuBoardTable";
import isSudokuComplete from "./helpers/checkCompletion";
import { Status } from "./status.enum";
import StatusMessage from "./StatusMessage";

const StyledGame = styled.main`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
`;

const SudokuGame = () => {
  const [selected, setSelected] = useState<BoardCellPosition>([null, null]);
  const [sudokuBoard, setSudokuBoard] = useState<SudokuBoard>([[]]);
  const [status, setStatus] = useState<Status>(Status.PLAYING);
  const [inputValue, setInputValue] = useState<string>("");

  const onGetInitialBoardWithStatus = (input?: string): void => {
    const { sudokuBoard, status } = getInitialBoardWithStatus(input);
    setSudokuBoard(JSON.parse(JSON.stringify(sudokuBoard)));
    setStatus(status);
  };

  useEffect(() => {
    onGetInitialBoardWithStatus();
  }, []);

  const onValidate = (): void => {
    const { sudokuBoard: updatedBoard, status } = validateBoard([
      ...sudokuBoard,
    ]);
    setSudokuBoard(updatedBoard);
    setStatus(status);
    setSelected([null, null]);
  };

  const onPick = (
    e: React.MouseEvent<HTMLTableDataCellElement>,
    value: number
  ): void => {
    e.stopPropagation();
    const sudokuCopy = [...sudokuBoard];
    if (
      selected[0] !== null &&
      selected[1] !== null &&
      !sudokuCopy[selected[0]][selected[1]].isPrefilled
    ) {
      sudokuCopy[selected[0]][selected[1]] = {
        value,
        isPrefilled: false,
        isError: false,
      };
      if (isSudokuComplete(sudokuCopy)) {
        onValidate();
        if (status === Status.IN_PROGRESS) {
          setStatus(Status.COMPLETED);
        }
      } else {
        setSudokuBoard(sudokuCopy);
        setStatus(Status.PLAYING);
      }
      setSelected([null, null]);
    }
  };

  const onReset = (): void => {
    onGetInitialBoardWithStatus();
    setSelected([null, null]);
  };

  const onStart = (): void => {
    onGetInitialBoardWithStatus(inputValue);
    setInputValue("");
    setSelected([null, null]);
  };

  const onInputValueChange = (value: string): void => {
    setInputValue(value);
  };

  const onSelect = (cellPosition: BoardCellPosition): void => {
    setSelected(cellPosition);
  };

  return (
    <StyledGame>
      <StatusMessage status={status} />
      <SudokuBoardTable
        sudokuBoardValues={sudokuBoard}
        selected={selected}
        onPick={onPick}
        onSelect={onSelect}
      />
      <GameControlPanel
        onValidate={onValidate}
        onReset={onReset}
        onStart={onStart}
        inputValue={inputValue}
        onInputValueChange={onInputValueChange}
      />
    </StyledGame>
  );
};

export default SudokuGame;
