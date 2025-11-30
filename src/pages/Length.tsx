import { useEffect, useRef, useState, type FormEvent } from "react";
import NumberInput from "../components/NumberInput";
import type { Unit } from "convert-units";

export default function Length() {
  const [inputFromVal, setInputFromVal] = useState<number | null>(null);
  const [inputFromUnit, setInputFromUnit] = useState<string | null>(null);
  const [inputToUnit, setInputToUnit] = useState<string | null>(null);
  // we expect the worker to return either null or { n: number; unit: string }
  const [result, setResult] = useState<null | { n: number; unit: string }>(
    null
  );
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../workers/length.worker.ts", import.meta.url),
      { type: "module" }
    );

    workerRef.current.onmessage = (e) => {
      setResult(e.data);
      console.log("length worker ->", e.data);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  useEffect(() => {
    if (workerRef.current) {
      workerRef.current.postMessage({
        inputFromVal,
        inputFromUnit,
        inputToUnit,
      });
    }
  }, [inputFromVal, inputFromUnit, inputToUnit]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const fromVal = formData.get("inputFromVal");

    const fromUnit = formData.get("inputFromUnit");
    const toUnit = formData.get("inputToUnit");

    if (!fromVal || !fromUnit || !toUnit) return;

    setInputFromVal(Number(fromVal));
    setInputFromUnit(fromUnit.toString());
    setInputToUnit(toUnit.toString());
  };

  return (
    <section className="w-full flex flex-col justify-center items-center gap-4 mb-2">
      <form
        className="w-full flex md:flex-row flex-col justify-center items-center gap-3"
        onSubmit={handleSubmit}
      >
        <NumberInput name="inputFromVal" />
        <select
          className="border-2 border-gray-400 px-2 py-2 rounded-md focus:outline-none focus:border-main md:text-xl text-sm"
          name="inputFromUnit"
        >
          <option value="m">m</option>
          <option value="km">km</option>
          <option value="hm">hm</option>
          <option value="dam">dam</option>
          <option value="dm">dm</option>
          <option value="cm">cm</option>
          <option value="mm">mm</option>
          <option value="ft">ft</option>
        </select>
        <select
          className="border-2 border-gray-400 px-2 py-2 rounded-md focus:outline-none focus:border-main md:text-xl text-sm"
          name="inputToUnit"
        >
          <option value="km">km</option>
          <option value="hm">hm</option>
          <option value="dam">dam</option>
          <option value="m">m</option>
          <option value="dm">dm</option>
          <option value="cm">cm</option>
          <option value="mm">mm</option>
          <option value="ft">ft</option>
        </select>
        <button
          type="submit"
          className=" bg-main px-2 py-2 rounded-md md:text-xl text-sm text-white hover:scale-95 transition-transform hover:cursor-pointer"
        >
          Transform
        </button>
      </form>
      <div className="w-5/6 md:text-3xl text-xl flex justify-center items-center gap-2">
        <span className="text-main font-extrabold">Result: </span>
        <output>
          {result
            ? // show up to 4 decimals and remove trailing zeros
              Number.isFinite(result.n)
              ? +result.n.toFixed(4)
              : "-"
            : "-"}
        </output>
        <span>{result?.unit ?? ""}</span>
      </div>
    </section>
  );
}
