import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders correct Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const element = screen.getByText(
    "This app is the evolution of the mathematical workspace. We have redefined the way professionals, students, and researchers interact with calculus and logic. This application is not just a calculator; it is a modern, integral ecosystem meticulously designed to consolidate a vast repertoire of advanced mathematical functions in one accessible place."
  );

  expect(element).toBeTruthy();
});
