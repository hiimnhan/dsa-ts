import { beforeEach, describe, expect, it } from "vitest";
import MinHeap from "../MinHeap.ts";

interface LocalTestContext {
	heap: MinHeap<number>;
}

describe("Min Heap", () => {
	beforeEach<LocalTestContext>(async (context: LocalTestContext) => {
		context.heap = new MinHeap();
	});
	it<LocalTestContext>("Should return a array in correct order", ({ heap }) => {
		const actual = heap.heapify([2, 1, 3, 4, 7]);
		expect(actual).toEqual([1, 2, 3, 4, 7]);
	});
	it<LocalTestContext>("The `push()` should add data to heap", ({ heap }) => {
		heap.push(2);
		heap.push(3);
		expect(heap.size()).equal(2);
	});

	it<LocalTestContext>("The `pop()` should return the smallest data", ({
		heap,
	}) => {
		heap.heapify([2, 1, 3, 4, 7]);
		expect(heap.pop()).equal(1);
	});
});
