import GameBoard from "./GameBoard";
import React from "react";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(<GameBoard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
