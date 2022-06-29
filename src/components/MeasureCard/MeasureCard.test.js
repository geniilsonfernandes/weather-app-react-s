import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/dom";
import { MeasureCard } from ".";

const MockIcon = () => {
  return <div data-testid="icon"></div>;
};

const mock = {
  icon: <MockIcon />,
  title: "Wind",
  mesure: 10,
  unit: "km/h",
};

describe("<MeasureCard />", () => {
  it("should render the component correctly ", () => {
    renderWithTheme(<MeasureCard {...mock} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.mesure + mock.unit)).toBeInTheDocument();
  });
  it("should not render icon ", () => {
    renderWithTheme(
      <MeasureCard title={mock.title} mesure={mock.mesure} unit={mock.unit} />
    );

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.mesure + mock.unit)).toBeInTheDocument();
  });
});
