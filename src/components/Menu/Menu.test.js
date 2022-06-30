import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menu } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockFetch = jest.fn();

jest.mock("../../context/dataContext", () => {
  return {
    useDataContext: () => ({
      getForecastByPlace: mockFetch,
      loading: false,
      error: null,
      sucess: false,
    }),
  };
});

const currentPlace = {
  name: "rio",
};

let store = {};

const fakeLocalStorage = (function () {
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

describe("<SearchInpyut/>", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  beforeEach(() => {
    store = {};
  });

  it("should render the component correctly ", () => {
    renderWithTheme(<Menu currentPlace={currentPlace} />);

    expect(screen.getByText(currentPlace.name)).toBeInTheDocument();
    expect(screen.getByLabelText("menu")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });
  it("should opem modal menu when button clicked ", () => {
    renderWithTheme(<Menu currentPlace={currentPlace} />);

    userEvent.click(screen.getByText(currentPlace.name));
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "false"
    );
  });

  it("should close modal menu when clicked outside ", () => {
    renderWithTheme(
      <div data-testid="body">
        <Menu currentPlace={currentPlace} />
      </div>
    );

    userEvent.click(screen.getByText(currentPlace.name));
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "false"
    );
    userEvent.click(screen.getByTestId("body"));
    expect(screen.getByLabelText("menu expanded")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  describe("with localStorage", () => {
    it("should save new entries if it finds the same key in the storage", async () => {
      const currentPlaceToStorage = {
        name: "foo",
      };
      renderWithTheme(<Menu currentPlace={currentPlaceToStorage} />);

      expect(screen.getByText("foo")).toBeInTheDocument();
      expect(window.localStorage.getItem("history")).toEqual(
        '[{"name":"foo"}]'
      );
    });

    it("should get items to localstorage", async () => {
      store = {
        history: '[{"name":"foo1"}, {"name":"foo2"}]',
      };
      const currentPlaceToStorage = {
        name: "foo",
      };
      renderWithTheme(<Menu currentPlace={currentPlaceToStorage} />);

      expect(screen.getByText("foo")).toBeInTheDocument();
      expect(screen.getByText("foo1")).toBeInTheDocument();
      expect(screen.getByText("foo2")).toBeInTheDocument();
    });

    it("should show dropdown when clicked and remove item from screen and local storage", async () => {
      store = {
        history: '[{"name":"foo1"}, {"name":"foo2"}]',
      };
      const currentPlaceToStorage = {
        name: "foo",
      };
      renderWithTheme(<Menu currentPlace={currentPlaceToStorage} />);

      userEvent.click(screen.getByText("foo"));
      userEvent.click(screen.getByText("foo1").nextSibling);
      expect(screen.queryByText("foo1")).not.toBeInTheDocument();
      expect(window.localStorage.getItem("history")).toEqual(
        '[{"name":"foo2"},{"name":"foo"}]'
      );
    });

    it("should call(getForecastByPlace) when some dropdown menu item is clicked", async () => {
      store = {
        history: '[{"name":"foo1"}, {"name":"foo2"}]',
      };
      const currentPlaceToStorage = {
        name: "foo",
      };
      renderWithTheme(<Menu currentPlace={currentPlaceToStorage} />);

      userEvent.click(screen.getByText("foo"));
      userEvent.click(screen.getByText("foo1"));

      expect(mockFetch).toBeCalledWith("foo1");
    });
    it("should not save new entries if it finds the same key in the storage", async () => {
      store = {
        history: '[{"name":"foo1"},{"name":"foo2"}]',
      };
      const currentPlaceToStorage = {
        name: "foo1",
      };
      renderWithTheme(<Menu currentPlace={currentPlaceToStorage} />);

      expect(window.localStorage.getItem("history")).toEqual(
        '[{"name":"foo1"},{"name":"foo2"}]'
      );
    });
  });
});
