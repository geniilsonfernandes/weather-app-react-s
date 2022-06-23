import { screen } from "@testing-library/dom";
import renderWithTheme from "../../utils/test/renderWithTheme";
import { Home } from ".";

jest.mock("../../components/Menu", () => {
  return {
    __esModule: true,
    Menu: () => {
      return <div data-testid="Menu"></div>;
    },
  };
});
jest.mock("../../components/MeasureCard", () => {
  return {
    __esModule: true,
    MeasureCard: () => {
      return <div data-testid="MeasureCard"></div>;
    },
  };
});
jest.mock("../../components/Weather", () => {
  return {
    __esModule: true,
    Weather: () => {
      return <div data-testid="Weather"></div>;
    },
  };
});
jest.mock("../../components/Heading", () => {
  return {
    __esModule: true,
    Heading: () => {
      return <div data-testid="Heading"></div>;
    },
  };
});
jest.mock("../../components/WeatherCard", () => {
  return {
    __esModule: true,
    WeatherCard: () => {
      return <div data-testid="WeatherCard"></div>;
    },
  };
});

describe("<Home />", () => {
  it("should render Home correctly", () => {
    renderWithTheme(<Home />);

    expect(screen.getByTestId("Menu")).toBeInTheDocument();
    expect(screen.getByTestId("Heading")).toBeInTheDocument();
    expect(screen.getByTestId("Weather")).toBeInTheDocument();
    expect(screen.getAllByTestId("WeatherCard")).toHaveLength(5);
    expect(screen.getAllByTestId("MeasureCard")).toHaveLength(4);
  });
});
