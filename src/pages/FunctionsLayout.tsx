import { Outlet } from "react-router-dom";
import FunctionBox from "../components/FunctionBox";
import { FUNCTIONS_BOXES } from "../constants";

export default function FunctionsLayout() {
  return (
    <article className="w-11/12 flex flex-col gap-5 justify-center items-center">
      {/*[&>*:last-child]:col-span-2*/}
      <Outlet />
      <section className="grid grid-cols-2 w-full gap-2 col-span-2 ">
        {FUNCTIONS_BOXES.map((func) => {
          return (
            <FunctionBox
              functionName={func.functionName}
              boxIcon={func.boxIcon}
              key={func.funcId}
              path={func.path}
            />
          );
        })}
      </section>
    </article>
  );
}
