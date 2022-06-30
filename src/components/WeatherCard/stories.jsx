import { WeatherCard } from ".";

export default {
  title: "Weather/WeatherCard",
  component: WeatherCard,
  argTypes: {
    date: { control: "date" },
    iconCode: {
      control: "inline-radio",
      options: [200, 302, 500, 600, 701, 800],
    },
  },
};

export const Default = (args) => <WeatherCard {...args} />;

Default.args = {
  date: 123456,
  temp: 20,
  condition: "low rain",
};
