import { useEffect, useState } from "react";
import styled from "styled-components";
import validateBoard from "./helpers/validateBoard";
import { getInitialBoardWithStatus } from "./helpers/getInitialBoardWithStatus";
import { BoardCellPosition } from "./types/cell.type";
import { SudokuBoard } from "./types/board.type";
import GameControlPanel from "./GameControlPanel";
import SudokuBoardTable from "./SudokuBoardTable";
import isSudokuComplete from "./helpers/checkCompletion";
import { Status } from "./data/status.enum";
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

  const onValidate = (isCompleted?: boolean): void => {
    const { sudokuBoard: updatedBoard, status } = validateBoard([
      ...sudokuBoard,
    ]);
    setSudokuBoard(updatedBoard);
    setSelected([null, null]);
    if (status === Status.IN_PROGRESS && isCompleted) {
        setStatus(Status.COMPLETED);
        return;
      }
    setStatus(status);
  };

  const isValidCellPicked = (): boolean => {
    return (
      selected[0] !== null &&
      selected[1] !== null &&
      !sudokuBoard[selected[0]][selected[1]].isPrefilled
    );
  };

  const onPick = (
    e: React.MouseEvent<HTMLTableDataCellElement>,
    value: number
  ): void => {
    e.stopPropagation();
    const localBoard = [...sudokuBoard];
    if (isValidCellPicked()) {
      localBoard[selected[0] as number][selected[1] as number] = {
        value,
        isPrefilled: false,
        isError: false,
      };
      if (isSudokuComplete(localBoard)) {
        onValidate(true);
      } else {
        setSudokuBoard(localBoard);
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
