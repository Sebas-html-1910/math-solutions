export default function multiplicationTables(n: number) {
  if (typeof n !== "number") return [];

  const res = [];

  for (let i = 1; i <= 10; i++) {
    res.push(i * n);
  }

  return res;
}
