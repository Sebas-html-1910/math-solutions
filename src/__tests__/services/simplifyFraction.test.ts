import { test, expect } from "vitest";
import simplifyFraction from "../../services/simplifyFraction";

test("Simplify Fraction Function", () => {
    const n = 30
    const d = 20

    const f = simplifyFraction(n, d)

    expect(f).toEqual({ n: 3, d: 2 });
})