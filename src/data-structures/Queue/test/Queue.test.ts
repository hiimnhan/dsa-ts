import { beforeEach, describe, expect, it } from "vitest";
import Queue from "../Queue.ts";

interface LocalTestContext {
	queue: Queue<number>;
}

describe("Queue", () => {
	beforeEach<LocalTestContext>(async (context: LocalTestContext) => {
		context.queue = new Queue();
		context.queue.enqueue(1);
		context.queue.enqueue(2);
		context.queue.enqueue(3);
	});
	it<LocalTestContext>("The `isEmpty()` should return false if the queue is not empty", ({
		queue,
	}) => {
		expect(queue.isEmpty()).toBe(false);
	});
	it<LocalTestContext>("The `enqueue()` should add a new data to the queue", ({
		queue,
	}) => {
		queue.enqueue(4);
		expect(queue.length).equal(4);
	});
	it<LocalTestContext>("The `dequeue()` should remove the data at front and return it", ({
		queue,
	}) => {
		const actual = queue.dequeue();
		expect(actual).equal(1);
		expect(queue.length).equal(2);
	});
	it<LocalTestContext>("The `peek()` should return the data at front", ({
		queue,
	}) => {
		expect(queue.peek()).equal(1);
	});
	it<LocalTestContext>("The `toArray()` should return an array with correct order", ({
		queue,
	}) => {
		const expected = [1, 2, 3];
		const actual = queue.toArray();
		expect(actual).toEqual(expected);
	});
});
