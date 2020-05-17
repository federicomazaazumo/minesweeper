import React from "react";
import ScoreBoard from "./ScoreBoard";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(<ScoreBoard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
