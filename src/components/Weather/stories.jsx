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
    date: { control: "date" },
    iconCode: {
      control: "inline-radio",
      options: [200, 302, 500, 600, 701, 800],
    },
  },
};

export const Default = (args) => <Weather {...args} />;

Default.args = {
  temp: 45,
  condition: "Clear sky",
  description: "Low rain",
  date: 10101000,
};
