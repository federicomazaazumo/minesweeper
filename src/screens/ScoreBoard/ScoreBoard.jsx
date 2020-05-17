import "./ScoreBoard.scss";

import {
  Button,
  Container,
  Grid,
  Label,
  Table,
} from "semantic-ui-react";

import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const ScoreBoard = () => {
  const { Column, Row } = Grid;
  const { Body, Cell, Header, HeaderCell, Row: TableRow } = Table;

  const scoreBoard = useSelector((state) => state.scoreBoard);

  return (
    <Grid
      centered
      className="scoreboard"
      padded
      textAlign="center"
      verticalAlign="middle"
    >
      <Row centered>
        <Column textAlign="center">
          <Header as="h1">Scoreboard</Header>
        </Column>
      </Row>
      <Row centered>
        <Column textAlign="center">
          <Container text>
            <Table celled>
              <Header>
                <TableRow>
                  <HeaderCell>Player</HeaderCell>
                  <HeaderCell>Points</HeaderCell>
                  <HeaderCell>Time Elapsed</HeaderCell>
                </TableRow>
              </Header>
              <Body>
                {scoreBoard.map((score, index) => (
                  <TableRow>
                    <Cell>
                      <Label color={index === 0 ? 'yellow' : ""} ribbon={index === 0 ? true : false}>{score.playerNickname}</Label>
                    </Cell>
                    <Cell>{score.bombs}</Cell>
                    <Cell>{score.timeElapsed}</Cell>
                  </TableRow>
                ))}
              </Body>
            </Table>
          </Container>
        </Column>
      </Row>
      <Row centered>
        <Column textAlign="center">
          <Button primary size="huge">
            <Link className="scoreboard__navigation" to="/">
              Return to the start screen
            </Link>
          </Button>
        </Column>
      </Row>
    </Grid>
  );
};

export default ScoreBoard;
