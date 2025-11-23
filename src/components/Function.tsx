import { useParams } from "react-router-dom";
import MultiplicationTables from "../pages/MultiplicationTables";
export default function Function() {
  const { funcName } = useParams();

  if (funcName === "multiplicationTables") return <MultiplicationTables />;
}
