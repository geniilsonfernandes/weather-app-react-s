import { MeasureCard } from ".";
import { WiStrongWind } from "react-icons/wi";

export default {
  title: "Weather/MeasureCard",
  component: MeasureCard,
};

export const Default = (args) => <MeasureCard {...args} />;

Default.args = {
  icon: <WiStrongWind aria-label="Wind" />,
  title: "Wind",
  mesure: "10km/h",
};

export const WithoutIcon = (args) => <MeasureCard {...args} />;

WithoutIcon.args = {
  icon: false,
  title: "Wind",
  mesure: "10km/h",
};
