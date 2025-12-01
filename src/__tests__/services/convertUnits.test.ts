import { test, expect } from "vitest";
import convertUnits from "../../services/convertUnits";

test("Convert Units Function (Length, Mass, Time)", () => {
  const res = convertUnits(2, "km", "m");
  expect(res).toEqual(2000);
  const res2 = convertUnits("2", "km", "m");
  expect(res2).toEqual(null);
});
