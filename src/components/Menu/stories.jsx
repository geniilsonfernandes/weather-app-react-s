import { Menu } from ".";
import { DataProvider } from "../../context/dataContext";

export default {
  title: "Menu/Menu",
  component: Menu,
};

export const Default = (args) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <DataProvider>
      <Menu {...args} />
    </DataProvider>
  </div>
);
Default.args = {
  currentPlace: {
    name: "rio",
  },
};
