import convert from "convert-units";

self.onmessage = (e: MessageEvent) => {
  const { inputFromVal, inputFromUnit, inputToUnit } = e.data;

  // Validate input to avoid throwing in the worker
  if (typeof inputFromVal !== "number" || !inputFromUnit || !inputToUnit) {
    self.postMessage(null);
    return;
  }

  const res = convert(inputFromVal).from(inputFromUnit).to(inputToUnit);

  self.postMessage({ n: res, unit: inputToUnit });
};
