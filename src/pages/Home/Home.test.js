import { screen } from "@testing-library/dom";
import renderWithTheme from "../../utils/test/renderWithTheme";
import { Home } from ".";
import { DataContext } from "../../context/dataContext";

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

const mockData = {
  name: "rio",
  current: {
    dt: 1656423994,
    feels_like: 21.96,
    humidity: 64,
    pressure: 1022,
    temp: 22.03,
    weather: [
      {
        description: "clear sky",
        icon: "01d",
        id: 800,
        main: "Clear",
      },
    ],
  },
  daily: [
    {
      dt: 1656423994,
      temp: {
        day: 22.03,
      },
      weather: [
        {
          id: 800,
        },
      ],
    },
  ],
};

const mockProps = {
  data: {},
  currentPlace: "rio",
};
describe("<Home />", () => {
  it("should render img loading", () => {
    renderWithTheme(
      <DataContext.Provider value={mockProps}>
        <Home />
      </DataContext.Provider>
    );
    expect(screen.getByAltText("loading")).toBeInTheDocument();
    expect(screen.getByText("Wait or search for a city")).toBeInTheDocument();
  });

  it("should render Home correctly", () => {
    mockProps.data = mockData;
    renderWithTheme(
      <DataContext.Provider value={mockProps}>
        <Home />
      </DataContext.Provider>
    );
    expect(screen.getByTestId("Menu")).toBeInTheDocument();
    expect(screen.getByTestId("Heading")).toBeInTheDocument();
    expect(screen.getByTestId("Weather")).toBeInTheDocument();
    expect(screen.getAllByTestId("WeatherCard")).toHaveLength(1);
    expect(screen.getAllByTestId("MeasureCard")).toHaveLength(4);
  });
});
