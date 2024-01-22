import { beforeEach, describe, expect, it } from "vitest";
import MaxHeap from "../MaxHeap.ts";

interface LocalTestContext {
	heap: MaxHeap<number>;
}

describe("Max Heap", () => {
	beforeEach<LocalTestContext>(async (context: LocalTestContext) => {
		context.heap = new MaxHeap();
	});
	it<LocalTestContext>("Should return a array in correct order", ({ heap }) => {
		const actual = heap.heapify([2, 1, 3, 4, 7]);
		expect(actual).toEqual([7, 4, 3, 2, 1]);
	});
	it<LocalTestContext>("The `push()` should add data to heap", ({ heap }) => {
		heap.push(2);
		heap.push(3);
		expect(heap.size()).equal(2);
	});

	it<LocalTestContext>("The `pop()` should return the largest data", ({
		heap,
	}) => {
		heap.heapify([2, 1, 3, 4, 7]);
		expect(heap.pop()).equal(7);
	});
});
