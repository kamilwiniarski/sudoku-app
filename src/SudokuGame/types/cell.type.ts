export type BoardCellPosition = [number, number] | [null, null];

export type BoardCellStyle = {
  isSelected: boolean;
  isError: boolean;
  isPrefilled: boolean;
};
