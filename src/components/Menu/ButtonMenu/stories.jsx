import { ButtonMenu } from ".";

export default {
  title: "Menu/Button",
  component: ButtonMenu,
};

export const Default = (args) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <ButtonMenu {...args} />
  </div>
);
Default.args = {
  title: "rio de janeiro",
  onClick: () => {},
};
