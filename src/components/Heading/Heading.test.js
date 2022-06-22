import { screen } from "@testing-library/react";
import { Heading } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

describe("<Heading />", () => {
  it("should render the component correctly", () => {
    renderWithTheme(<Heading title="Week" />);
    expect(screen.getByRole("heading", { name: "Week" })).toBeInTheDocument();
  });
});
