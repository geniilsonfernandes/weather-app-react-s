import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataProvider, useDataContext } from ".";

const TestingComponent = () => {
  const { getForecastByPlace, data, error } = useDataContext();
  console.log("data:", data, "error:", error);
  return (
    <div>
      <button
        onClick={() => getForecastByPlace("rio")}
        data-testid="fetchPlace"
      />
    </div>
  );
};

describe("DataProvider", () => {
  it("should", async () => {
    const { debug } = render(
      <DataProvider>
        <TestingComponent />
      </DataProvider>
    );
    debug();
    userEvent.click(screen.getByTestId("fetchPlace"));
  });
});
