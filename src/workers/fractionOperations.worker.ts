import Fraction from "fraction.js";
import {
  divFrac,
  mulFrac,
  subFrac,
  sumFrac,
} from "../services/fractionsOperations";

self.onmessage = (e: MessageEvent) => {
  const { operation, num1, den1, num2, den2 } = e.data;

  let res = null;

  const f1 = new Fraction(num1, den1);
  const f2 = new Fraction(num2, den2);

  switch (operation) {
    case "add":
      res = sumFrac(f1, f2);
      res = res?.toString().split("/");
      res = { n: Number(res?.[0]), d: Number(res?.[1]) };
      break;
    case "sub":
      res = subFrac(f1, f2);
      res = res?.toString().split("/");
      res = { n: Number(res?.[0]), d: Number(res?.[1]) };
      break;
    case "mul":
      res = mulFrac(f1, f2);
      res = res?.toString().split("/");
      res = { n: Number(res?.[0]), d: Number(res?.[1]) };
      break;
    case "div":
      res = divFrac(f1, f2);
      res = res?.toString().split("/");
      res = { n: Number(res?.[0]), d: Number(res?.[1]) };
      break;
  }

  self.postMessage(res);
};
