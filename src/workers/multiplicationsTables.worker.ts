import multiplicationTables from "../services/multiplicationTables";

self.onmessage = (e: MessageEvent<number>) => {
  const res = multiplicationTables(e.data);

  self.postMessage(res);
};
