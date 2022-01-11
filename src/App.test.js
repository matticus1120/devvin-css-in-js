import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Devvin on CSS in JSk", () => {
  render(<App />);
  const linkElement = screen.getByText(/Devvin on CSS in JS/i);
  expect(linkElement).toBeInTheDocument();
});
