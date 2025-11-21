import {
  faCalculator,
  faInfinity,
  faPencilRuler,
  faSuperscript,
  faTimes,
  faChartArea,
  faBorderAll,
  faDivide,
  faExchangeAlt,
  faCut,
  faWeightHanging,
  faClock,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FunctionsBox } from "./types";

export const FUNCTIONS_BOXES: FunctionsBox[] = [
  {
    functionName: "Calculator",
    boxIcon: <FontAwesomeIcon icon={faCalculator} />,
    funcId: 1,
  },
  {
    functionName: "Multiplication Tables",
    boxIcon: <FontAwesomeIcon icon={faTimes} />,
    funcId: 2,
  },
  {
    functionName: "Raising",
    boxIcon: <FontAwesomeIcon icon={faSuperscript} />,
    funcId: 3,
  },
  {
    functionName: "Derivatives",
    boxIcon: <FontAwesomeIcon icon={faPencilRuler} />,
    funcId: 4,
  },
  {
    functionName: "Integral",
    boxIcon: <FontAwesomeIcon icon={faInfinity} />,
    funcId: 5,
  },
  // Graficación
  {
    functionName: "Graphics",
    boxIcon: <FontAwesomeIcon icon={faChartArea} />,
    funcId: 6,
  },
  // Matrices
  {
    functionName: "Arrays",
    boxIcon: <FontAwesomeIcon icon={faBorderAll} />,
    funcId: 7,
  },
  // Fraction Operations
  {
    functionName: "Length",
    boxIcon: <FontAwesomeIcon icon={faRulerHorizontal} />,
    funcId: 8,
  },
  // Fraction Converter
  {
    functionName: "Fraction Converter",
    boxIcon: <FontAwesomeIcon icon={faExchangeAlt} />,
    funcId: 9,
  },
  // Simplify Fraction
  {
    functionName: "Simplify Fraction",
    boxIcon: <FontAwesomeIcon icon={faCut} />,
    funcId: 10,
  },
  // Mass
  {
    functionName: "Mass",
    boxIcon: <FontAwesomeIcon icon={faWeightHanging} />,
    funcId: 11,
  },
  // Time
  {
    functionName: "Time",
    boxIcon: <FontAwesomeIcon icon={faClock} />,
    funcId: 12,
  },

  {
    functionName: "Fraction Operations",
    boxIcon: <FontAwesomeIcon icon={faDivide} />,
    funcId: 13,
  },
];
