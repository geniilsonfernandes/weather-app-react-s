import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

describe("<SearchInpyut/>", () => {
  it("should render the component correctly ", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText("La Plata, Argentina")).toBeInTheDocument();
    expect(screen.getByLabelText("menu")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });
  it("should opem modal menu when button clicked ", () => {
    renderWithTheme(<Menu />);

    userEvent.click(screen.getByText("La Plata, Argentina"));
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "false"
    );
  });
  it("should close modal menu when  clicked outside ", () => {
    renderWithTheme(
      <div data-testid="body">
        <Menu />
      </div>
    );

    userEvent.click(screen.getByText("La Plata, Argentina"));
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "false"
    );
    userEvent.click(screen.getByTestId("body"));
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });
});
