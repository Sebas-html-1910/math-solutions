import { useEffect, useRef, useState, type FormEvent } from "react";
import NumberInput from "../components/NumberInput";

export default function FractionOperations() {
  const [operation, setOperation] = useState<string | null>(null);
  const [num1, setNum1] = useState<number | null>(null);
  const [den1, setDen1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [den2, setDen2] = useState<number | null>(null);
  const [result, setResult] = useState<null | { n: number; d: number }>(null);
  const [err, setErr] = useState<string | null>(null);

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../workers/fractionOperations.worker.ts", import.meta.url),
      { type: "module" }
    );

    workerRef.current.onmessage = (e) => {
      setResult(e.data);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  useEffect(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({ operation, num1, den1, num2, den2 });
    }
  }, [operation, num1, den1, num2, den2]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const n1 = formData.get("num1");
    const d1 = formData.get("den1");
    const n2 = formData.get("num2");
    const d2 = formData.get("den2");
    const op = formData.get("operation");

    if (!n1 || !d1 || !n2 || !d2 || !op) {
      setErr("All fields are required");
      return;
    }

    if (Number(d1) === 0 || Number(d2) === 0) {
      setErr("Denominator cannot be zero");
      return;
    }

    if (
      n1.toString().includes(".") ||
      d1.toString().includes(".") ||
      n2.toString().includes(".") ||
      d2.toString().includes(".")
    ) {
      setErr("Invalid Input");
      return;
    }

    if (
      n1.toString().includes("e") ||
      d1.toString().includes("e") ||
      n2.toString().includes("e") ||
      d2.toString().includes("e")
    ) {
      setErr("Invalid Input");
      return;
    }

    setErr(null);
    setNum1(Number(n1));
    setDen1(Number(d1));
    setNum2(Number(n2));
    setDen2(Number(d2));
    setOperation(op.toString());
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <form
        className="flex md:flex-row flex-col justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="md:w-2/8 w-full flex justify-center items-center flex-col gap-2">
          <NumberInput name="num1" />
          <div className="w-full border border-main"></div>
          <NumberInput name="den1" />
        </div>
        <select
          className="border-2 border-gray-400 px-2 py-2 rounded-md focus:outline-none focus:border-main md:text-xl text-sm"
          name="operation"
        >
          <option value="add">+</option>
          <option value="sub">−</option>
          <option value="mul">×</option>
          <option value="div">÷</option>
        </select>
        <div className="md:w-2/8 w-full flex justify-center items-center flex-col gap-2">
          <NumberInput name="num2" />
          <div className="w-full border border-main"></div>
          <NumberInput name="den2" />
        </div>
        <button
          type="submit"
          className=" bg-main px-2 py-2 rounded-md md:text-xl text-sm text-white hover:scale-95 transition-transform hover:cursor-pointer"
        >
          Calculate
        </button>
      </form>

      <div className="w-fill md:text-3xl text-xl flex flex-col justify-center items-center gap-2">
        <span className="text-main font-extrabold">Result: </span>

        {result ? (
          !isNaN(result.d) ? (
            <>
              <output>{result ? result.n : "?"}</output>
              <div className="w-full border border-main"></div>
              <output>{result ? result.d : "?"}</output>
            </>
          ) : (
            <output>{result?.n}</output>
          )
        ) : (
          "?"
        )}
        {err ? (
          <span className="text-red-500 md:text-2xl text-xl">{err}</span>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
