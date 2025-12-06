import simplifyFraction from "../services/simplifyFraction";

self.onmessage = (e: MessageEvent) => {
  const { num, den } = e.data;

  let res = null;

  res = simplifyFraction(num, den);

  self.postMessage(res);
};
