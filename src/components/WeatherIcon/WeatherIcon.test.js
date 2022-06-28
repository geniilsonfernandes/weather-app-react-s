import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "./index";

describe("<WeatherIcon />", () => {
  it("shoud icon render with label and title", () => {
    const { container } = render(
      <WeatherIcon iconCode={200} label="clear sky" />
    );
    expect(screen.getByTitle("clear sky")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("shoud icon no found when icon no pass", () => {
    const { container } = render(<WeatherIcon />);
    expect(screen.getByTitle("no found")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
