import Fraction from "fraction.js";

export default function simplifyFraction(n: number, d: number) {
  const f = new Fraction(n, d);
  const fractionToSimplify = new Fraction(1, 1);

  const simplifiedFraction = f.mul(fractionToSimplify).toFraction();
  const res = {
    n: Number(simplifiedFraction.split("/")[0]),
    d: Number(simplifiedFraction.split("/")[1]),
  };

  return res;
}
