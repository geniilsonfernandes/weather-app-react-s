//1656384911, // Mon, 27 Jun 2022

import { convertTimeStamp } from "./convertTimeStamp";

describe("convertTimeStamp", () => {
  it("shoul return weekday", () => {
    expect(convertTimeStamp(1656384911).weekday).toEqual("Mon");
  });
  it("shoul return weekday", () => {
    expect(convertTimeStamp(1656384911).date).toEqual(27);
  });
  it("shoul return year", () => {
    expect(convertTimeStamp(1656384911).year).toEqual("2022");
  });
  it("shoul return fullDate", () => {
    expect(convertTimeStamp(1656384911).fullDate).toEqual("Mon, 27 Jun 2022");
  });
});
