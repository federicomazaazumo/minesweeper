import React from "react";
import StatusCard from "./StatusCard";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(<StatusCard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
