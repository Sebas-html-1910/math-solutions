import FunctionBox from "../components/FunctionBox";
import { FUNCTIONS_BOXES } from "../constants";

export default function FunctionsLayout() {
  return (
    <article className="w-11/12 flex flex-col gap-5 justify-center items-center">
      <h3 className="md:text-4xl text-xl font-bold">Functions : </h3>
      <section className="grid grid-cols-2 w-full gap-2 col-span-2 [&>*:last-child]:col-span-2">
        {FUNCTIONS_BOXES.map((func) => {
          return (
            <FunctionBox
              functionName={func.functionName}
              boxIcon={func.boxIcon}
              key={func.funcId}
            />
          );
        })}
      </section>
    </article>
  );
}
