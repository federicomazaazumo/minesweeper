import React from "react";
import StartScreen from "./StartScreen";
import { shallow } from "enzyme";

it("Renders without crashing", () => {
  shallow(<StartScreen />);
});
