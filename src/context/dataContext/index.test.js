/* eslint-disable react/prop-types */
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataContext, DataProvider } from ".";
import { getForecast } from "../../services/api";
import { act } from "react-dom/test-utils";
jest.mock("../../services/api");

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
    store = {};
  });

  it("should call function and recived date", async () => {
    getForecast.mockResolvedValueOnce({
      name: "Vitória",
    });
    render(
      <DataProvider>
        <DataContext.Consumer>
          {({ getForecastByPlace, data, error, sucess }) => (
            <>
              {!data.name && <span>Loading...</span>}
              {sucess && <span>sucess</span>}
              {sucess && <span>{data.name}</span>}
              {error && <span>{error}</span>}
              <button
                onClick={() => getForecastByPlace("rio")}
                data-testid="btn"
              />
            </>
          )}
        </DataContext.Consumer>
      </DataProvider>
    );

    userEvent.click(screen.getByTestId("btn"));
    expect(getForecast).toBeCalledWith("rio");
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    await waitFor(() => {
      expect(screen.queryByText("Vitória")).toBeInTheDocument();
      expect(screen.queryByText("sucess")).toBeInTheDocument();
    });
  });

  it("should show error message", async () => {
    getForecast.mockRejectedValueOnce(new Error("city not found"));
    render(
      <DataProvider>
        <DataContext.Consumer>
          {({ error, getForecastByPlace }) => (
            <>
              <span> {error} </span>
              <button
                onClick={() => getForecastByPlace("foo")}
                data-testid="btn"
              />
            </>
          )}
        </DataContext.Consumer>
      </DataProvider>
    );

    userEvent.click(screen.getByTestId("btn"));
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
            {({ getForecastByPlace, currentPlace }) => (
              <>
                {currentPlace && <span> {currentPlace.name} </span>}
                <button
                  onClick={() => getForecastByPlace("foo")}
                  data-testid="btn"
                />
              </>
            )}
          </DataContext.Consumer>
        </DataProvider>
      );
    });
    act(() => {
      userEvent.click(screen.getByTestId("btn"));
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

      await act(async () => {
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
    it("should not call function when currrent city don't has in localstorege", async () => {
      store = {};

      await act(async () => {
        render(
          <DataProvider>
            <DataContext.Consumer>
              {({ data }) => <>{!data.name && <span>no has city</span>}</>}
            </DataContext.Consumer>
          </DataProvider>
        );
      });

      expect(getForecast).not.toBeCalled();

      await waitFor(() => {
        expect(screen.queryByText("no has city")).toBeInTheDocument();
      });
    });
  });
});
