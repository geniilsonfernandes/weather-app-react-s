import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { Base } from ".";
import userEvent from "@testing-library/user-event";


jest.mock("../../components/SearchInput", () => {
  return {
    __esModule: true,
    // eslint-disable-next-line react/prop-types
    SearchInput: ({ onSubmit }) => {
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
      };
      return (
        <form onSubmit={handleSubmit}>
          <input data-testid="input" />
        </form>
      );
    },
  };
});

const mockFetch = jest.fn();
jest.mock("../../context/dataContext", () => {
  return {
    useDataContext: () => ({
      getForecastByPlace: mockFetch,
      loading: false,
      error: null,
      sucess: false,
    }),
  };
});

describe("<Base />", () => {
  it("should render base with children ", () => {
    renderWithTheme(
      <Base>
        <div data-testid="home"></div>
      </Base>
    );
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  it("should call function when keyboard enter clicked ", () => {
    renderWithTheme(
      <Base>
        <div data-testid="home"></div>
      </Base>
    );
    const input = screen.getByTestId("input");
    userEvent.type(input, "rio de janeiro");
    userEvent.keyboard("{enter}");
    expect(mockFetch).toBeCalled;
  });
});