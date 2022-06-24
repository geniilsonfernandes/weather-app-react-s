import { render, screen } from "@testing-library/react";
import { Base } from ".";

describe("<Base />", () => {
  it("should render base with children ", () => {
    render(
      <Base>
        <div data-testid="home"></div>
      </Base>
    );

    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
});
