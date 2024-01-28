import { beforeEach, describe, expect, it } from "vitest";
import Counter from "../Counter.ts";

interface LocalTestContext {
	counter: Counter;
}

describe("Counter", () => {
	describe("Init counter with different iterable object", () => {
		it("should successfully init with array", () => {
			const array = [1, 2, 2, 3, 4, 1];
			const counter = new Counter(array);
			const expected = [
				[1, 2],
				[2, 2],
				[3, 1],
				[4, 1],
			];
			expect(counter.elements()).toEqual(expected);
		});
		it("should successfully init with Set", () => {
			const set = new Set([1, 2, 3, 4]);
			const counter = new Counter(set);
			const expected = [
				[1, 1],
				[2, 1],
				[3, 1],
				[4, 1],
			];
			expect(counter.elements()).toEqual(expected);
		});
		it("should successfully init with string", () => {
			const str = "abcabccc";
			const counter = new Counter(str);
			const expected = [
				["a", 2],
				["b", 2],
				["c", 4],
			];
			expect(counter.elements()).toEqual(expected);
		});
	});
	describe("Functionality", () => {
		beforeEach<LocalTestContext>(async (context: LocalTestContext) => {
			context.counter = new Counter([1, 2, 2, 2, 3, 3]);
		});
		it<LocalTestContext>("The `mostCommon()` should return items in sorted order if there is no param", ({
			counter,
		}) => {
			const expected = [
				[2, 3],
				[3, 2],
				[1, 1],
			];
			expect(counter.mostCommon()).toEqual(expected);
		});
		it<LocalTestContext>("The `mostCommon()` should return correct number of items according to n", ({
			counter,
		}) => {
			const expected = [
				[2, 3],
				[3, 2],
			];
			expect(counter.mostCommon(2)).toEqual(expected);
		});
		it<LocalTestContext>("The `update()` should merge with other Counter objects", ({
			counter,
		}) => {
			const newCounter = new Counter([1, 4, 5]);
			counter.update(newCounter);
			const expected = [
				[1, 2],
				[2, 3],
				[3, 2],
				[4, 1],
				[5, 1],
			];
			expect(counter.elements()).toEqual(expected);

			const otherCounter = new Counter("abcabccc");
			counter.update(otherCounter);
			// @ts-expect-error https://github.com/microsoft/TypeScript/issues/6594
			const newExpected = expected.concat([
				["a", 2],
				["b", 2],
				["c", 4],
			]);

			expect(counter.elements()).toEqual(newExpected);
		});
		it<LocalTestContext>("The `get()` function should return correct count of the key", ({
			counter,
		}) => {
			expect(counter.get(3)).equal(2);
			expect(counter.get(10)).toBeNull();
		});
		it<LocalTestContext>("The `set()` function should add value correctly", ({
			counter,
		}) => {
			counter.set(2, 5);
			expect(counter.get(2)).equal(8);
		});
	});
});
