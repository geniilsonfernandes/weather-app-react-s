import { screen } from "@testing-library/react";
import { WeatherCard } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

describe("<WeatherCard />", () => {
  it("should render the component correctly", () => {
    renderWithTheme(
      <WeatherCard date={12345} temp={10} icon="Rain" condition="low rain" />
    );
    expect(screen.getByLabelText("low rain")).toBeInTheDocument();
    expect(screen.getByText(12345)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "10°C" })).toBeInTheDocument();
  });
});
