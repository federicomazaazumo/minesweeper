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
import useBoardGeneration from "../../hooks/useBoardGeneration";

const GameBoard = () => {
  const { Column, Row } = Grid;
  const { setGameOnScoreBoard } = ScoreBoard.actions;

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();
  const boardHeight = useSelector((state) => state.gameBoard.boardHeight);
  const boardWidth = useSelector((state) => state.gameBoard.boardWidth);
  const playerNickname = useSelector((state) => state.gameBoard.playerNickname);

  const [board, bombs, cells, setBoard, setBombs, setCells] = useBoardGeneration(boardHeight, boardWidth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateTime();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeElapsed]);

  const updateTime = () => {
    setTimeElapsed((previousState) => previousState + 1);
  };

  const onGameEnd = () => {
    alert("GAME OVER");
    dispatch(setGameOnScoreBoard({ playerNickname, score, timeElapsed }));
    history.push("/");
  };

  useEffect(() => {
    if (gameOver) {
      onGameEnd();
    }
  });

  const visitCell = (event, A, B) => {
    event.preventDefault();

    depthFirstSearchCell(A, B);

    cells[A][B] = 1;
    setCells([...cells]);
    setScore((score) => score + 1);

    if (board[A][B] === "X") setGameOver(true);
  };

  const flagCell = (event, A, B) => {
    event.preventDefault();

    if (cells[A][B] !== "F") {
      if (bombs > 0) {
        cells[A][B] = "F";
        setBombs((bombs) => bombs - 1);
        setCells([...cells]);
      }
    } else {
      cells[A][B] = 0;
      setBombs((bombs) => bombs + 1);
      setCells([...cells]);
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
            <StatusCard
              bombs={bombs}
              playerNickname={playerNickname}
              timeElapsed={timeElapsed}
            />
          </Column>
        </Row>
        <Row centered>
          <Column textAlign="center">
            {board.map((boardRow, A) => (
              <div key={`${A}-${A}`}>
                {boardRow.map((element, B) => (
                  <div
                    className={`gameboard__cell ${
                      cells[A][B] === 0 || cells[A][B] === "F"
                        ? ""
                        : "gameboard__cell--visited"
                    }`}
                    key={`${A}-${B}`}
                    onClick={(event) => visitCell(event, A, B)}
                    onContextMenu={(event) => flagCell(event, A, B)}
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
                        className="gameboard__bomb-icon"
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
            <Link className="gameboard__navigation" to="/">
              <Button primary size="huge">
                Return to the start screen
              </Button>
            </Link>
          </Column>
        </Row>
      </Grid>
    </Container>
  );
};

export default GameBoard;
