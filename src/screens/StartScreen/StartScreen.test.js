import React from "react";
import StartScreen from "./StartScreen";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(<StartScreen />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
