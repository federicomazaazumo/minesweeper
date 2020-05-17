import GameBoard from "./GameBoard";
import { Provider } from "react-redux";
import React from "react";
import { Store } from "../../state/store";
import { shallow } from "enzyme";

it("Renders without crashing", () => {
  shallow(
    <Provider store={Store}>
      <GameBoard />
    </Provider>
  );
});
