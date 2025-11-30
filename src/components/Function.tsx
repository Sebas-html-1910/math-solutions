import { useParams } from "react-router-dom";
import MultiplicationTables from "../pages/MultiplicationTables";
import Length from "../pages/Length";
import Mass from "./Mass";
export default function Function() {
  const { funcName } = useParams();

  if (funcName === "multiplicationTables") return <MultiplicationTables />;
  if (funcName === "length") return <Length />;
  if (funcName === "mass") return <Mass />;
}
