import { useEffect, useState } from "react";

const useBoardGeneration = (boardHeight, boardWidth) => {
  const [board, setBoard] = useState([[]]);
  const [bombs, setBombs] = useState(0);
  const [cells, setCells] = useState([[]]);

  useEffect(() => {
    const numberHeight = Number(boardHeight);
    const numberWidth = Number(boardWidth);

    let boardMatrix = Array(numberHeight)
      .fill(0)
      .map(() => Array(numberWidth).fill(0));

    const cellMatrix = Array(numberHeight)
      .fill(0)
      .map(() => Array(numberWidth).fill(0));

    let count = 0;

    for (let index = 0; index < boardMatrix.length; index++) {
      const position = Math.floor(Math.random() * 10);

      boardMatrix[index][position] = "X";
      count++;
    }

    for (let A = 0; A < boardMatrix.length; A++) {
      for (let B = 0; B < boardMatrix[A].length; B++) {
        if (boardMatrix[A][B] !== "X") {
          let summation = 0;

          if (A > 0 && boardMatrix[A - 1][B] === "X") summation++;
          if (A < boardMatrix.length - 1 && boardMatrix[A + 1][B] === "X") summation++;
          if (B < boardMatrix.length - 1 && boardMatrix[A][B + 1] === "X") summation++;
          if (B > 0 && boardMatrix[A][B - 1] === "X") summation++;
          if (A < boardMatrix.length - 1 && B > 0 && boardMatrix[A + 1][B - 1] === "X")
            summation++;
          if (
            A < boardMatrix.length - 1 &&
            B < boardMatrix.length - 1 &&
            boardMatrix[A + 1][B + 1] === "X"
          )
            summation++;
          if (A > 0 && B > 0 && boardMatrix[A - 1][B - 1] === "X") summation++;
          if (A > 0 && B < boardMatrix.length - 1 && boardMatrix[A - 1][B + 1] === "X")
            summation++;

          boardMatrix[A][B] = summation;
        }
      }
    }

    setBoard(boardMatrix);
    setBombs(count);
    setCells(cellMatrix);
  }, [boardHeight, boardWidth]);

  return [
    board,
    bombs,
    cells,
    setBoard,
    setBombs,
    setCells,
  ];
};

export default useBoardGeneration;
