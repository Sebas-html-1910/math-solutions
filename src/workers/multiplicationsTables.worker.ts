self.onmessage = (e: MessageEvent<number>) => {
  const n = e.data;
  const res = [];

  for (let i = 1; i <= 10; i++) {
    res.push(i * n);
  }

  self.postMessage(res);
};
