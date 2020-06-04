import "./StartScreen.scss";

import { Button, Grid, Header } from "semantic-ui-react";

import ConfigurationForm from "../../components/ConfigurationForm";
import { Link } from "react-router-dom";
import React from "react";

const StartScreen = () => {
  const { Column, Row } = Grid;

  return (
    <Grid
      centered
      className="startscreen"
      padded
      textAlign="center"
      verticalAlign="middle"
    >
      <Row centered>
        <Column textAlign="center">
          <Header as="h1">Minesweeper</Header>
        </Column>
      </Row>
      <Row centered>
        <Column textAlign="center">
          <ConfigurationForm></ConfigurationForm>
        </Column>
      </Row>
      <Row centered>
        <Column textAlign="center">
          <Link className="startscreen__navigation" to="/scoreboard">
            <Button primary size="huge">
              Go to the scoreboard
            </Button>
          </Link>
        </Column>
      </Row>
    </Grid>
  );
};

export default StartScreen;
