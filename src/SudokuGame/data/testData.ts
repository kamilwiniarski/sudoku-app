import { RawSudokuBoard, SudokuBoard } from "../types/board.type";

export const rawBoard: RawSudokuBoard = [
  [null, 8, 6, 2, 4, 7, 5, 1, null],
  [7, 5, 1, 3, 8, 6, 2, 9, 4],
  [null, 2, 3, 5, 9, 1, 7, 8, null],
  [2, 4, 9, 7, 5, 8, 3, 6, 1],
  [1, 7, 8, 6, 3, 4, 9, 2, 5],
  [3, 6, 5, 9, 1, 2, 8, 4, 7],
  [8, 3, 7, 4, null, 9, 1, 5, 2],
  [5, 1, 4, 8, 2, 3, 6, 7, 9],
  [6, 9, 2, 1, 7, 5, 4, 3, 8],
];

export const rawCompleteBoard: RawSudokuBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

export const rawCorruptedBoard: RawSudokuBoard = [
  [null, 8, 6, 2, 4, 7, 5, 1, null],
  [7, 5, 1, 3, 8, 6, 2, 9, 4],
  [null, 2, 3, 5, 9, 1, 7, 8, null],
  [2, 4, 9, 7, 5, 8, 3, 6],
  [1, 7, 8, 6, 3, 4, 9, 2, 5],
  [3, 6, 5, 9, 1, 2, 8, 4, 7],
  [8, 3, 7, 4, null, 9, 1, 5, 2],
  [5, 1, 4, 8, 2, 5, 12, 6, 7],
  [6, 9, 2, 1, 7, 5, 4, 3, 8],
];

export const completeBoard: SudokuBoard = [
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
];

export const completeBoardPrefilled: SudokuBoard = [
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
    [
      {
        value: 1,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 2,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 3,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 4,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 5,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 6,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 7,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 8,
        isPrefilled: true,
        isError: false,
      },
      {
        value: 9,
        isPrefilled: true,
        isError: false,
      },
    ],
  ];

export const incompleteBoard: SudokuBoard = [
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
];

export const completeBoardTransposed: SudokuBoard = [
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
];

export const completeBoardPeerSquareTransformed: SudokuBoard = [
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
];

export const completeBoardWitErrors: SudokuBoard = [
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 2,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 3,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 4,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 5,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 6,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 7,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 8,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 9,
      isPrefilled: false,
      isError: false,
    },
  ],
];

export const boardWithSpecificErrors: SudokuBoard = [
  [
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: 1,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
  [
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
    {
      value: null,
      isPrefilled: false,
      isError: false,
    },
  ],
];
