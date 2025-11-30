import { useParams } from "react-router-dom";
import MultiplicationTables from "../pages/MultiplicationTables";
import Length from "../pages/Length";
export default function Function() {
  const { funcName } = useParams();

  if (funcName === "multiplicationTables") return <MultiplicationTables />;
  if (funcName === "length") return <Length />;
}
