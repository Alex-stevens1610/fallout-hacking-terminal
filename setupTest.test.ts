import { expect, test } from "vitest";
import { sum } from "./setupTest";

test('Should return correct sum', () => {
    expect(sum(1, 2)).toBe(3)
})