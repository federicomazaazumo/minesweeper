import "./GameBoard.scss";

import { Button, Container, Grid } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import {
  faBomb as bombIcon,
  faFlagCheckered as flagChekeredIcon,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ScoreBoard } from "../../state/slices";
import StatusCard from "../../components/StatusCard";
import { useHistory } from "react-router-dom";

const GameBoard = () => {
  const { Column, Row } = Grid;
  const { setGameOnScoreBoard } = ScoreBoard.actions;

  const [board, setBoard] = useState([[]])
  const [bombs, setBombs] = useState(0)
  const [cells, setCells] = useState([[]])
  const [timeElapsed, setTimeElapsed] = useState(0)

  const dispatch = useDispatch();
  const history = useHistory();
  const boardHeight = useSelector((state) => state.gameBoard.boardHeight);
  const boardWidth = useSelector((state) => state.gameBoard.boardWidth);
  const playerNickname = useSelector((state) => state.gameBoard.playerNickname);

  useEffect(() => {
    let boardMatrix = Array(boardHeight)
      .fill(0)
      .map(() => Array(boardWidth).fill(0));

    const cellMatrix = Array(boardHeight)
      .fill(0)
      .map(() => Array(boardWidth).fill(0));

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateTime()
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeElapsed]);

  const updateTime = () => {
    setTimeElapsed(previousState => previousState + 1);
  }
  
  const onGameEnd = () => {
    dispatch(setGameOnScoreBoard({ bombs, playerNickname, timeElapsed }));
  }

  const visitCell = (event, A, B) => {
    event.preventDefault();

    if (board[A][B] === "X") {
      alert("GAME OVER");
      onGameEnd()
      history.push("/");
    }

    depthFirstSearchCell(A, B);

    cells[A][B] = 1;
    setCells([...cells]);
  };

  const flagCell = (event, A, B) => {
    event.preventDefault();

    if (cells[A][B] !== "F") {
      if (bombs > 0) {
        cells[A][B] = "F";
        setBombs(bombs => bombs - 1);
        setCells([...cells]);
      }
    } else {
      cells[A][B] = 0
      setBombs(bombs => bombs + 1);
      setCells([...cells])
    }
  };

  function depthFirstSearchCell(A, B) {
    if (
      A < 0 ||
      A > cells.length - 1 ||
      B < 0 ||
      B > cells[0].length - 1 ||
      cells[A][B] === 1 ||
      board[A][B] === "X"
    )
      return;

    cells[A][B] = 1;
    setCells([...cells]);

    if (board[A][B] < 1) {
      depthFirstSearchCell(A + 1, B);
      depthFirstSearchCell(A - 1, B);
      depthFirstSearchCell(A, B + 1);
      depthFirstSearchCell(A, B - 1);
    }
  }

  return (
    <Container className="gameboard__container" fluid>
      <Grid
        centered
        className="gameboard__content"
        padded
        textAlign="center"
        verticalAlign="middle"
      >
        <Row centered columns={2}>
          <Column textAlign="center">
            <StatusCard bombs={bombs} playerNickname={playerNickname} timeElapsed={timeElapsed} />
          </Column>
        </Row>
        <Row centered>
          <Column textAlign="center">
            {board.map((boardRow, A) => (
              <div>
                {boardRow.map((element, B) => (
                  <div
                    onClick={(event) => visitCell(event, A, B)}
                    onContextMenu={(event) => flagCell(event, A, B)}
                    className={`gameboard__cell ${
                      cells[A][B] === 0 || cells[A][B] === "F"
                        ? ""
                        : "gameboard__cell--visited"
                    }`}
                  >
                    {cells[A][B] === 0 ? (
                      ""
                    ) : cells[A][B] === "F" ? (
                      <FontAwesomeIcon
                        className="gameboard__flag-icon"
                        icon={flagChekeredIcon}
                      />
                    ) : board[A][B] === 0 ? (
                      ""
                    ) : board[A][B] === "X" ? (
                      <FontAwesomeIcon
                        icon={bombIcon}
                      />
                    ) : (
                      board[A][B]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </Column>
        </Row>
        <Row centered columns={2}>
          <Column textAlign="center">
            <Button primary size="huge">
              <Link className="gameboard__navigation" to="/">
                Return to the start screen
              </Link>
            </Button>
          </Column>
        </Row>
      </Grid>
    </Container>
  );
};

export default GameBoard;
