import { screen } from "@testing-library/react";
import renderWithTheme from "../../../utils/test/renderWithTheme";
import { ButtonMenu } from ".";
import userEvent from "@testing-library/user-event";

const funcMock = jest.fn();
const title = "rio";
describe("<ButtonMenu />", () => {
  it("should render Button correctaly", () => {
    renderWithTheme(<ButtonMenu title={title} onClick={() => {}} id={100} />);

    expect(screen.getByRole("button", { name: /rio/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /remove/i })
    ).toBeInTheDocument();
  });
  it("should call the function when click", () => {
    renderWithTheme(<ButtonMenu title={title} onClick={funcMock} />);

    userEvent.click(screen.getByRole("button", { name: /rio/i }));
    expect(funcMock).toBeCalled();
  });
  it("should call the function when tooltip click", () => {
    renderWithTheme(<ButtonMenu title={title} toolTipOnClick={funcMock} />);

    userEvent.click(screen.getByRole("button", { name: /remove/i }));
    expect(funcMock).toBeCalled();
  });
});
