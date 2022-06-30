import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { SearchInput } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";
import theme from "../../styles/theme";

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
    expect(onChange).toBeCalledWith("rio de janeiro");
  });
  it("should call function only if input have value", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} />);
    const input = screen.getByPlaceholderText("Search places");
    userEvent.click(input);
    expect(input).toHaveFocus();
    userEvent.keyboard("{enter}");
    expect(onChange).not.toBeCalled();
  });
  it("should show menssage error when happing", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} error={"error"} />);
    expect(screen.getByText("error")).toBeInTheDocument();
  });
  it("should show loading icon", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} loading={true} />);
    expect(screen.getByLabelText("loading")).toBeInTheDocument();
  });
  it("should have stylers of error (border red)", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} error={"error"} />);
    const input = screen.getByPlaceholderText("Search places");
    expect(input.parentElement).toHaveStyle({
      "box-shadow": "0 0 0 1px #d34b4b",
    });
  });
  it("should have cursor not-allowed when loading", () => {
    renderWithTheme(<SearchInput onSubmit={onChange} loading={true} />);
    const input = screen.getByPlaceholderText("Search places");
    expect(input).toHaveAttribute("disabled");
    expect(input.parentElement).toHaveStyle({
      cursor: "not-allowed",
    });
  });
  it("should clear input if sucess return", () => {
    const { rerender } = renderWithTheme(<SearchInput onSubmit={onChange} />);
    const input = screen.getByPlaceholderText("Search places");
    userEvent.type(input, "rio de janeiro");
    expect(input.value).toBe("rio de janeiro");
    rerender(
      <ThemeProvider theme={theme}>
        <SearchInput sucess={true} />
      </ThemeProvider>
    );
    expect(input.value).toBe("");
  });
});
