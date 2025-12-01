import convertUnits from "../services/convertUnits";

// @ts-expect-error - global is not defined in web workers
self.global = self;

self.onmessage = (e: MessageEvent) => {
  const { inputFromVal, inputFromUnit, inputToUnit } = e.data;

  const res = convertUnits(inputFromVal, inputFromUnit, inputToUnit);
  self.postMessage({ n: res, unit: inputToUnit });
};
