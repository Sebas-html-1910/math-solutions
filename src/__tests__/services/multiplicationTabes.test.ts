import multiplicationTables from "../../services/multiplicationTables";
import { test, expect } from "vitest";

test("Multiplication Tables Function", () => {
  const res = multiplicationTables(2);
  expect(res).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  const res2 = multiplicationTables("2");
  expect(res2).toEqual([]);
});
