import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../components/Error404";
import FunctionsLayout from "../pages/FunctionsLayout";
import Function from "../components/Function";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/funcs",
        element: <FunctionsLayout />,
        children: [{ path: ":funcName", element: <Function /> }],
      },
    ],
    errorElement: <Error404 />,
  },
]);

export default router;
