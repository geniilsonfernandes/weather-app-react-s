import { WeatherIcon } from ".";

export default {
  title: "Icons/WeatherIcon",
  component: WeatherIcon,
  argTypes: {
    iconCode: {
      control: "inline-radio",
      options: [200, 302, 500, 600, 701, 800],
    },
  },
};

export const Default = (args) => (
  <span style={{ fontSize: "100px" }}>
    <WeatherIcon {...args} />
    <br />
    <a href="https://openweathermap.org/weather-conditions">icons code</a>
  </span>
);

Default.args = {
  iconCode: 200,
  label: "Clear sky",
};
