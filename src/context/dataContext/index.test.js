/* eslint-disable react/prop-types */
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataContext, DataProvider, useDataContext } from ".";
import { getForecast } from "../../services/api";
import { act } from "react-dom/test-utils";
jest.mock("../../services/api");

const TestingComponent = ({ query }) => {
  const { getForecastByPlace, data, error, sucess } = useDataContext();
  return (
    <div>
      {!data.name && <span>Loading...</span>}
      {sucess && <span>sucess</span>}
      {sucess && <span>{data.name}</span>}
      {error && <span>{error}</span>}
      <button onClick={() => getForecastByPlace(query)}>query place</button>
    </div>
  );
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

describe("DataProvider", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  beforeEach(() => {
    // make sure the fridge starts out empty for each test
    store = {};
  });

  it("should call function getForecastByPlace and recived date", async () => {
    getForecast.mockResolvedValueOnce({
      name: "Vitória",
    });
    render(
      <DataProvider>
        <TestingComponent query="Vitória" />
      </DataProvider>
    );

    userEvent.click(screen.getByText("query place"));
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    await waitFor(() => {
      expect(screen.queryByText("Vitória")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("sucess")).toBeInTheDocument();
    });
  });

  it("should show error message", async () => {
    getForecast.mockRejectedValueOnce(new Error("city not found"));
    render(
      <DataProvider>
        <DataContext.Consumer>
          {(value) => (
            <>
              <span> {value.error} </span>
              <button onClick={() => value.getForecastByPlace("foo")}>
                query place
              </button>
            </>
          )}
        </DataContext.Consumer>
      </DataProvider>
    );

    userEvent.click(screen.getByText("query place"));
    await waitFor(() => {
      expect(screen.queryByText("city not found")).toBeInTheDocument();
    });
  });

  it("should return current city", async () => {
    getForecast.mockResolvedValueOnce({
      name: "campos",
    });

    act(() => {
      render(
        <DataProvider>
          <DataContext.Consumer>
            {(value) => (
              <>
                {value.currentPlace && <span> {value.currentPlace.name} </span>}
                <button onClick={() => value.getForecastByPlace("foo")}>
                  query place
                </button>
              </>
            )}
          </DataContext.Consumer>
        </DataProvider>
      );
    });

    act(() => {
      userEvent.click(screen.getByText("query place"));
    });

    await waitFor(() => {
      expect(screen.queryByText("campos")).toBeInTheDocument();
    });
  });

  describe("localStorage", () => {
    it("should call function when currrent city has in localstorege", async () => {
      store = {
        currentPlace: '{"name":"foo"}',
      };

      getForecast.mockResolvedValueOnce({
        name: "foo",
      });

      act(() => {
        render(
          <DataProvider>
            <DataContext.Consumer>
              {({ currentPlace }) => (
                <>{currentPlace && <span>{currentPlace.name} </span>}</>
              )}
            </DataContext.Consumer>
          </DataProvider>
        );
      });

      expect(getForecast).toBeCalledWith("foo");

      await waitFor(() => {
        expect(screen.queryByText("foo")).toBeInTheDocument();
      });
    });
  });
});
