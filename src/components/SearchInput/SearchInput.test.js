import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const onChange = jest.fn();

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

  it("should call function when keyboard enter clicked ", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} />);

    const input = screen.getByPlaceholderText("Search places");

    userEvent.type(input, "rio de janeiro");

    userEvent.keyboard("{enter}");
    expect(onChange).toBeCalled();
  });
  it("should call function only if input have value", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} />);

    userEvent.keyboard("{enter}");
    expect(onChange).not.toBeCalled();
  });
});
