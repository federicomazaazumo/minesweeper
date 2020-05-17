import NavigationRouter from "./NavigationRouter";
import React from "react";
import { shallow } from "enzyme";

it("Renders without crashing", () => {
  shallow(<NavigationRouter />);
});
