import { screen } from "@testing-library/react";
import { Weather } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

jest.mock("../WeatherIcon", () => {
  return {
    __esModule: true,
    WeatherIcon: () => {
      return <div data-testid="icon"></div>;
    },
  };
});

const mock = {
  temp: 45,
  condition: "Clear sky",
  description: "Low rain",
  date: 1656384911, // Mon, 27 Jun 2022
};

describe("<Weather />", () => {
  it("should render the component correctly", () => {
    renderWithTheme(<Weather {...mock} />);

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
    expect(screen.getByText(mock.condition)).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();
    expect(screen.getByText("Mon, 27 Jun 2022")).toHaveTextContent(
      "Mon, 27 Jun 2022"
    );
    expect(screen.getByText(`45°C`)).toBeInTheDocument();
  });
});
