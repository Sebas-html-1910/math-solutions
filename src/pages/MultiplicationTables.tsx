import { useState, type FormEvent } from "react";
import NumberInput from "../components/NumberInput";

function calculateMultiplicationsTables(n: number) {
  const res = [];

  for (let i = 1; i <= 10; i++) {
    res.push(i * n);
  }

  return res;
}

export default function MultiplicationTables() {
  const [inputVal, setInputVal] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const input = formData.get("inputVal");

    if (!input) return;

    setInputVal(Number(input));
  };

  const renderMultiplicationTables = (n: number) => {
    const res = calculateMultiplicationsTables(n);

    return res.map((item, index) => {
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
        <NumberInput name="inputVal" />
        <button
          type="submit"
          className=" bg-main px-2 py-2 rounded-md w-full md:text-xl text-sm text-white hover:scale-95 transition-transform hover:cursor-pointer"
        >
          Generate
        </button>
      </form>
      <div className="w-2/6 flex justify-center items-center">
        <ul>{inputVal && renderMultiplicationTables(inputVal)}</ul>
      </div>
    </section>
  );
}
