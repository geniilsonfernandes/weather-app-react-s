import { Weather } from ".";
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

export default {
  title: "Weather",
  conponent: Weather,
  argTypes: {
    icon: { control: "select", options: cases },
    date: { control: "date" },
  },
};

export const Default = (args) => <Weather {...args} />;

Default.args = {
  temp: 45,
  condition: "Clear sky",
  description: "Low rain",
  date: 10101000,
};
