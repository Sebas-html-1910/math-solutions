import type Fraction from "fraction.js";

export function sumFrac(f1: Fraction, f2: Fraction) {
  if (f2.n === 0n) return null;
  if (f1.d === 0n || f2.d === 0n) return null;

  const res = f1.add(f2).toFraction();
  return res;
}

export function subFrac(f1: Fraction, f2: Fraction) {
  if (f2.n === 0n) return null;
  if (f1.d === 0n || f2.d === 0n) return null;

  const res = f1.sub(f2).toFraction();
  return res;
}

export function mulFrac(f1: Fraction, f2: Fraction) {
  if (f2.n === 0n) return null;
  if (f1.d === 0n || f2.d === 0n) return null;

  const res = f1.mul(f2).toFraction();
  return res;
}

export function divFrac(f1: Fraction, f2: Fraction) {
  if (f2.n === 0n) return null;
  if (f1.d === 0n || f2.d === 0n) return null;

  const res = f1.div(f2).toFraction();
  return res;
}
