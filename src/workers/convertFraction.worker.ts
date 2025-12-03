import Fraction from "fraction.js";

self.onmessage = (e: MessageEvent) => {
  const inputVal = e.data;

  let res = null;

  const f = new Fraction(inputVal);

  // Convert BigInt to number to avoid "Cannot convert BigInt to number" errors
  res = { n: Number(f.n), d: Number(f.d) };

  self.postMessage(res);
};
