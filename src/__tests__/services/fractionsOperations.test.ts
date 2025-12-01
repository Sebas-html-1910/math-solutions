import Fraction from "fraction.js";
import { test, expect } from "vitest";
import {
  sumFrac,
  subFrac,
  mulFrac,
  divFrac,
} from "../../services/fractionsOperations";

test("Sum Fractions Function", () => {
  const f1 = new Fraction(2, 2);
  const f2 = new Fraction(2, 3);

  const res = sumFrac(f1, f2);

  expect(res).toEqual("5/3");
  
  const fZero = new Fraction(0, 1);
  const errResSum = sumFrac(f1, fZero);
  expect(errResSum).toBeNull();
});

test("Sub Fractions Function", () => {
  const f1 = new Fraction(2, 2);
  const f2 = new Fraction(2, 3);

  const res = subFrac(f1, f2);

  expect(res).toEqual("1/3");
  
  const fZero = new Fraction(0, 1);
  const errResSub = subFrac(f1, fZero);
  expect(errResSub).toBeNull();
});

test("Mul Fractions Function", () => {
  const f1 = new Fraction(2, 2);
  const f2 = new Fraction(2, 3);

  const res = mulFrac(f1, f2);

  expect(res).toEqual("2/3");
  
  const fZero = new Fraction(0, 1);
  const errResMul = mulFrac(f1, fZero);
  expect(errResMul).toBeNull();
});

test("Div Fractions Function", () => {
  const f1 = new Fraction(2, 2);
  const f2 = new Fraction(2, 3);

  const res = divFrac(f1, f2);

  expect(res).toEqual("3/2");
  
  const fZero = new Fraction(0, 1);
  const errResDiv = divFrac(f1, fZero);
  expect(errResDiv).toBeNull();
});
