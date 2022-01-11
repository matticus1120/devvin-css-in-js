import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import PageSection from "./PageSection";
import { PageContext } from "./PageContext";

/**
 * Create a resusable function to render components in.
 *
 * Note: When componets are connected to redux, this will also need to
 * include a mockstore wrapper
 */
function AllProviders({ children, value }) {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

describe("PageSection", () => {
  it("increases and decreases the count", () => {
    const value = {
      count: 6,
      increaseCount: jest.fn(),
    };

    render(
      <AllProviders value={value}>
        <PageSection />
      </AllProviders>
    );

    const increaseButton = screen.getByRole("button", {
      name: /Increase The Count/i,
    });

    expect(screen.getByLabelText(/The total count is:/).textContent).toBe("6");
    fireEvent.click(increaseButton);
    expect(value.increaseCount).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});
