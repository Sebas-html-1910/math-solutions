import { useState, useEffect, useRef, type FormEvent } from "react";
import NumberInput from "../components/NumberInput";

export default function MultiplicationTables() {
  const [inputVal, setInputVal] = useState<number>(1);
  const [tableResults, setTableResults] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const workerRef = useRef<Worker | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../workers/multiplicationsTables.worker.ts", import.meta.url),
      { type: "module" }
    );

    workerRef.current.onmessage = (e) => {
      setTableResults(e.data);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  useEffect(() => {
    if (workerRef.current) {
      workerRef.current.postMessage(inputVal);
    }
  }, [inputVal]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const input = formData.get("inputVal");

    if (!input) return;
    if (input.toString().includes("e")) {
      setErr("The input is invalid");
      return;
    }

    setInputVal(Number(input));
    setErr(null);
  };

  const renderMultiplicationTables = (n: number, results: number[]) => {
    return results.map((item, index) => {
      return (
        <li key={index} className="md:text-2xl text-sm">
          {index + 1} x {n} = {item}
        </li>
      );
    });
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-4 mb-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3 w-2/6"
      >
        <NumberInput name="inputVal" isError={err} />
        <button
          type="submit"
          className=" bg-main px-2 py-2 rounded-md w-full md:text-xl text-sm text-white hover:scale-95 transition-transform hover:cursor-pointer"
        >
          Generate
        </button>
      </form>
      <div className="w-2/6 flex justify-center items-center">
        <ul>
          {tableResults.length > 0 &&
            renderMultiplicationTables(inputVal, tableResults)}
        </ul>
      </div>
    </section>
  );
}
