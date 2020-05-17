import React from "react";
import StatusCard from "./StatusCard";
import { shallow } from "enzyme";

it("Renders without crashing", () => {
  shallow(<StatusCard />);
});
