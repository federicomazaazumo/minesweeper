import "./ScoreBoard.scss";

import { Button, Container, Grid, Label, Table } from "semantic-ui-react";

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
                {scoreBoard.length > 0 ? (
                  scoreBoard.map((score, index) => (
                    <TableRow>
                      <Cell>
                        <Label
                          color={index === 0 ? "yellow" : "grey"}
                          ribbon={index === 0 ? true : false}
                        >
                          {score.playerNickname}
                        </Label>
                      </Cell>
                      <Cell>{score.score}</Cell>
                      <Cell>{score.timeElapsed}</Cell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <Cell>No data</Cell>
                    <Cell>No data</Cell>
                    <Cell>No data</Cell>
                  </TableRow>
                )}
              </Body>
            </Table>
          </Container>
        </Column>
      </Row>
      <Row centered>
        <Column textAlign="center">
          <Link className="scoreboard__navigation" to="/">
            <Button primary size="huge">
              Return to the start screen
            </Button>
          </Link>
        </Column>
      </Row>
    </Grid>
  );
};

export default ScoreBoard;
