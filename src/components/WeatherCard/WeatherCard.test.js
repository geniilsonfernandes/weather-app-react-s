import { WeatherCard } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

describe("<WeatherCard />", () => {
  it("should render the component correctly", () => {
    renderWithTheme(<WeatherCard />);
  });
});
