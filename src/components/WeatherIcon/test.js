import { render, screen } from "@testing-library/react";
import { WeatherIcon } from "./index";

const cases = [
  "ClearSky",
  "BrokenClouds",
  "FewClouds",
  "Mist",
  "Rain",
  "ScatteredClouds",
  "Snow",
  "Thunderstorm",
];

describe("<WeatherIcon />", () => {
  it.each(cases)("Should render icon correctly if test cases", (first) => {
    render(<WeatherIcon icon={first} label={first} />);
    expect(screen.getByLabelText(first)).toBeInTheDocument();
  });
  it("shoud icom not found when icon no pass", () => {
    render(<WeatherIcon />);
    expect(screen.getByLabelText("Not found")).toBeInTheDocument();
  });
});
