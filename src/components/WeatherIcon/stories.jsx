import { WeatherIcon } from ".";

export default {
  title: "Icons/WeatherIcon",
  component: WeatherIcon,
};

export const Default = (args) => <WeatherIcon {...args} />;

Default.args = {
  icon: "ClearSky",
  label: "Clear sky",
};
