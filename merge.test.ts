import { describe, expect, test } from '@jest/globals';
import { merge } from "./merge";

describe("merge", () => {
    test("Merges two empty arrays", () => {
        expect(merge([], [])).toEqual([]);
    });

    test("Merges an empty array with a non-empty array", () => {
        expect(merge([], [0, 1, 2])).toEqual([0, 1, 2]);
    });

    test("merges two non-empty arrays", () => {
        expect(merge([1, 3, 5, 7], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test("Merges two non-empty arrays with duplicate elements", () => {
        expect(merge([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 2, 3, 3, 4]);
    });
});
