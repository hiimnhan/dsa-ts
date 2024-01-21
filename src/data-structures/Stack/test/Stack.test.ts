import { beforeEach, describe, expect, it } from "vitest";
import Stack from "../Stack.ts";

interface LocalTestContext {
	stack: Stack<number>;
}

describe("Stack", () => {
	beforeEach<LocalTestContext>(async (context: LocalTestContext) => {
		context.stack = new Stack();
		context.stack.push(1);
		context.stack.push(2);
		context.stack.push(3);
	});
	it<LocalTestContext>("The `isEmpty()` should return false if the stack is not empty", ({
		stack,
	}) => {
		expect(stack.isEmpty()).toBe(false);
	});
	it<LocalTestContext>("The `push()` should add new data to the stack", ({
		stack,
	}) => {
		stack.push(4);
		expect(stack.length).equal(4);
	});
	it<LocalTestContext>("The `pop()` should remove the data at the top of the stack and return it", ({
		stack,
	}) => {
		const actual = stack.pop();
		expect(actual).toBe(3);
		expect(stack.length).equal(2);
	});
	it<LocalTestContext>("The `top()` should return the data at the top of the stack", ({
		stack,
	}) => {
		expect(stack.top()).equal(3);
	});
	it<LocalTestContext>("The `toArray()` should return an array with correct order", ({
		stack,
	}) => {
		const expected = [1, 2, 3];
		const actual = stack.toArray();
		expect(actual).toEqual(expected);
	});
});
