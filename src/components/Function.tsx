import { useParams } from "react-router-dom";
import MultiplicationTables from "../pages/MultiplicationTables";
import Length from "../pages/Length";
import Mass from "../pages/Mass";
import Time from "../pages/Time";
export default function Function() {
  const { funcName } = useParams();

  switch (funcName) {
    case "multiplicationTables":
      return <MultiplicationTables />;
    case "length":
      return <Length />;
    case "mass":
      return <Mass />;
    case "time":
      return <Time />;

    default:
      break;
  }
}
