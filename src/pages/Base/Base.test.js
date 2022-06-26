import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { Base } from ".";

jest.mock("../../context/dataContext", () => {
  return {
    useDataContext: () => ({
      fetchQuery: jest.fn(),
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
});
