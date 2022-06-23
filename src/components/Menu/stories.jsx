import { Menu } from ".";

export default {
  title: "Menu",
  component: Menu,
};

export const Default = (args) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Menu {...args} />
  </div>
);
