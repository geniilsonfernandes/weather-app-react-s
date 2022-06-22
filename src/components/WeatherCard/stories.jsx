import { WeatherCard } from ".";

export default {
  title: "WeatherCard",
  component: WeatherCard,
  argTypes: {
    date: { control: "date" },
  },
};

export const Default = (args) => <WeatherCard {...args} />;

Default.args = {
  date: 123456,
  temp: 20,
  icon: "Rain",
  condition: "low rain",
};
