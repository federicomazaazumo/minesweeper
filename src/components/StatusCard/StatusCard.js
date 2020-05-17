import "./StatusCard.scss";

import {
  faBomb as bombIcon,
  faClock as clockIcon,
  faUser as userIcon,
} from "@fortawesome/free-solid-svg-icons";

import { Card } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StatusCard = ({ bombs, playerNickname, timeElapsed }) => {
  const { Content, Description, Group, Header } = Card;

  return (
    <Group>
      <Card color="yellow">
        <Content>
          <Header>Bombs Remaining</Header>
          <Description>
            <FontAwesomeIcon icon={bombIcon} />
            <span> {bombs}</span>
          </Description>
        </Content>
      </Card>
      <Card color="yellow">
        <Content>
          <Header>Time Elapsed</Header>
          <Description>
            <FontAwesomeIcon icon={clockIcon} />
            <span> {timeElapsed}</span>
          </Description>
        </Content>
      </Card>
      <Card color="yellow">
        <Content>
          <Header>Active Player</Header>
          <Description>
            <FontAwesomeIcon icon={userIcon} />
            <span> {playerNickname}</span>
          </Description>
        </Content>
      </Card>
    </Group>
  );
};

export default StatusCard;
