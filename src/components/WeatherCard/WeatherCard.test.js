import { screen } from "@testing-library/react";
import { WeatherCard } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

//1656384911, // Mon, 27 Jun 2022
const weekday = "Mon";
jest.mock("../../utils/convertTimeStamp", () => {
  return {
    convertTimeStamp: () => {
      return { weekday };
    },
  };
});

describe("<WeatherCard />", () => {
  it("should render the component correctly", () => {
    renderWithTheme(
      <WeatherCard
        date={1656384911}
        temp={10}
        iconCode={200}
        condition="low rain"
      />
    );
    expect(screen.getByTitle("low rain")).toBeInTheDocument();
    expect(screen.getByText("Mon")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "10°C" })).toBeInTheDocument();
  });
});
