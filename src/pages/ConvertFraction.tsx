import { useEffect, useRef, useState, type FormEvent } from "react";
import NumberInput from "../components/NumberInput";

export default function ConvertFraction() {
  const [inputVal, setInputVal] = useState<number | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const [result, setResult] = useState<null | { n: number; d: number }>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../workers/convertFraction.worker.ts", import.meta.url),
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
    if (workerRef.current && inputVal !== null) {
      workerRef.current.postMessage(inputVal);
    }
  }, [inputVal]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const input = formData.get("inputVal");

    if (!input) {
      setErr("The input is invalid");
      return;
    }

    if (input.toString().includes("e")) {
      setErr("The input is invalid");
    }

    if (input) setInputVal(Number(input));
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6">
      <form
        className="w-4/6 flex justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <NumberInput name="inputVal" decimal isError={err} />
        <button
          type="submit"
          className=" bg-main px-2 py-2 rounded-md md:text-xl text-sm text-white hover:scale-95 transition-transform hover:cursor-pointer"
        >
          Convert
        </button>
      </form>
      <div className="w-fill md:text-3xl text-xl flex flex-col justify-center items-center gap-2">
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
          <>
            <p>
              <span className="text-main font-extrabold">Result: </span> ?
            </p>
          </>
        )}
      </div>
    </section>
  );
}
