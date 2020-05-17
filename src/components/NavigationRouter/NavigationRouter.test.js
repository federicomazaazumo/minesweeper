import NavigationRouter from "./NavigationRouter";
import React from "react";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(<NavigationRouter />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
