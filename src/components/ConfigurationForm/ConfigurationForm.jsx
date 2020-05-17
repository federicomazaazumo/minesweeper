import "./ConfigurationForm.scss";

import {
  Button,
  Checkbox,
  Container,
  Divider,
  Form,
  Grid,
  Message,
} from "semantic-ui-react";
import React, { useState } from "react";

import { GameBoard } from "../../state/slices";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ConfigurationForm = () => {
  const { Input } = Form;
  const { Column, Row } = Grid;
  const { Header } = Message;
  const { defineGameBoard } = GameBoard.actions;

  const [boardBombs, setBoardBombs] = useState(10);
  const [boardHeight, setBoardHeight] = useState(10);
  const [boardWidth, setBoardWidth] = useState(10);
  const [formHasError, setFormHasError] = useState(false);
  const [gameDifficulty, setGameDifficutly] = useState(1);
  const [playerNickname, setPlayerNickname] = useState("Meliodas");

  const history = useHistory();
  const dispatch = useDispatch();

  const changeGameDifficulty = (data) => {
    switch (data.label) {
      case "Easy":
        setGameDifficutly(0);
        setBoardBombs(5);
        setBoardHeight(5);
        setBoardWidth(5);
        break;
      case "Normal":
        setGameDifficutly(1);
        setBoardBombs(10);
        setBoardHeight(10);
        setBoardWidth(10);
        break;
      case "Hard":
        setGameDifficutly(2);
        setBoardBombs(15);
        setBoardHeight(15);
        setBoardWidth(15);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateData()) {
      setFormHasError(false);
      dispatch(
        defineGameBoard({ boardBombs, boardHeight, boardWidth, playerNickname })
      );
      history.push("/gameboard");
    } else {
      setFormHasError(true);
    }
  };

  const validateData = () => {
    const areOutOfRange =
      boardBombs > 15 || boardHeight > 15 || boardWidth > 15;
    const areLowerThanOne =
      boardBombs <= 0 || boardHeight <= 0 || boardWidth <= 0;

    return areOutOfRange || areLowerThanOne ? false : true;
  };

  return (
    <Container text>
      <Form key="variables" onSubmit={handleFormSubmit} size="large">
        <Divider horizontal>Enter your nickname</Divider>
        <Grid>
          <Row columns="equal">
            <Column>
              <Input
                labelPosition="right"
                name="playerNickname"
                onChange={(event) => setPlayerNickname(event.target.value)}
                placeholder="Nickname"
                type="text"
                value={playerNickname}
              />
            </Column>
          </Row>
        </Grid>
        <Divider horizontal>Setup your game conditions</Divider>
        <Grid>
          <Row columns="equal">
            <Column>
              <Input
                labelPosition="right"
                name="bombsNumber"
                onChange={(event) => setBoardBombs(Number(event.target.value))}
                placeholder="Number of bombs"
                type="number"
                value={boardBombs}
              />
            </Column>
            <Column>
              <Input
                labelPosition="right"
                name="boardHeight"
                onChange={(event) => setBoardHeight(Number(event.target.value))}
                placeholder="Height of the gameboard"
                type="number"
                value={boardHeight}
              />
            </Column>
            <Column>
              <Input
                labelPosition="right"
                name="boardWidth"
                onChange={(event) => setBoardWidth(Number(event.target.value))}
                placeholder="Width of the gameboard"
                type="number"
                value={boardWidth}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Message negative hidden={!formHasError}>
                <Header>Hold On Cowboy!</Header>
                <p>Valid numbers goes from 1 to 15.</p>
              </Message>
            </Column>
          </Row>
        </Grid>
        <Divider horizontal>or select a game difficulty</Divider>
        <Grid>
          <Row columns="equal">
            <Column>
              <Checkbox
                checked={gameDifficulty === 0}
                label="Easy"
                name="checkbox"
                onChange={(event, data) => changeGameDifficulty(data)}
                toggle
              />
            </Column>
            <Column>
              <Checkbox
                checked={gameDifficulty === 1}
                label="Normal"
                name="checkbox"
                onChange={(event, data) => changeGameDifficulty(data)}
                toggle
              />
            </Column>
            <Column>
              <Checkbox
                checked={gameDifficulty === 2}
                label="Hard"
                name="checkbox"
                onChange={(event, data) => changeGameDifficulty(data)}
                toggle
              />
            </Column>
          </Row>
        </Grid>
        <Divider horizontal>Ready?</Divider>
        <Grid>
          <Row centered>
            <Column textAlign="center">
              <Button primary size="huge" type="submit">
                Create the game board
              </Button>
            </Column>
          </Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default ConfigurationForm;
