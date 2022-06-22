import { Heading } from ".";

export default {
  title: "Heading",
  component: Heading,
};

export const Default = (args) => <Heading {...args} />;
Default.args = {
  title: "Week",
};
