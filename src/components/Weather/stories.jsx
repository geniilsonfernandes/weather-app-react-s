import Weather from "./index";
import mock from "./mock";
export default {
  title: "Weather",
  conponent: Weather,
};

export const Default = (args) => <Weather {...args} />;

Default.args = {
  ...mock,
};
