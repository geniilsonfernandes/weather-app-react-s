import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

describe("<SearchInpyut/>", () => {
  it("should render the component correctly ", () => {
    renderWithTheme(<SearchInput />);

    const input = screen.getByPlaceholderText("Search places");

    expect(screen.getByPlaceholderText("Search places")).toBeInTheDocument();
    expect(screen.getByLabelText(/search icon button/i)).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("should show text when user write on input", () => {
    renderWithTheme(<SearchInput />);

    const input = screen.getByPlaceholderText("Search places");

    userEvent.type(input, "rio de janeiro");
    expect(input.value).toBe("rio de janeiro");
  });
});
