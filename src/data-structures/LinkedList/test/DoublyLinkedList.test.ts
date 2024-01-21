import { beforeEach, describe, it } from "vitest";
import { test } from "vitest";
import { expect } from "vitest";
import DoublyLinkedList from "../DoublyLinkedList.ts";

interface LocalTestContext {
	list: DoublyLinkedList<number>;
}

describe("DoublyLinkedList", () => {
	describe("Create instance", () => {
		test("should initialize with size 0 and empty head", () => {
			const list = new DoublyLinkedList();
			expect(list.size).equal(0);
		});
	});

	describe("Functional tests", () => {
		beforeEach<LocalTestContext>(async (context: LocalTestContext) => {
			context.list = new DoublyLinkedList<number>();
		});
		it<LocalTestContext>("The `isEmpty()` function should return true if the list is empty", ({
			list,
		}) => {
			expect(list.isEmpty()).toBe(true);
		});
		it<LocalTestContext>("The `isEmpty()` function should return false if there is a node in the list", ({
			list,
		}) => {
			list.push(1);
			expect(list.isEmpty()).toBe(false);
		});
		it<LocalTestContext>("The `push()` function should append data to list", ({
			list,
		}) => {
			list.push(1);
			expect(list.size).equal(1);
			expect(list.get(0)).equal(1);
		});
		it<LocalTestContext>("The `pop()` function should return the data of the tail node", ({
			list,
		}) => {
			list.push(1);
			list.push(2);
			list.push(3);
			expect(list.pop()).equal(3);
			expect(list.size).equal(2);
		});
		it<LocalTestContext>("The `pop()` function should return null if list is empty", ({
			list,
		}) => {
			const actual = list.pop();
			expect(actual).toBeNull();
		});
		it<LocalTestContext>("The `pushLeft()` function should add data as the new head node", ({
			list,
		}) => {
			list.push(1);
			list.push(2);
			list.pushLeft(3);
			expect(list.size).equal(3);
			expect(list.get(0)).equal(3);
		});
		it<LocalTestContext>("The `pushLeft()` should add data as the new head node if list is empty", ({
			list,
		}) => {
			expect(list.head).toBeNull();
			list.pushLeft(1);
			expect(list.size).equal(1);
			expect(list.get(0)).equal(1);
		});
		it<LocalTestContext>("The `popLeft()` function should remove the head node and return its data", ({
			list,
		}) => {
			list.push(1);
			list.push(2);
			expect(list.size).equal(2);
			const actual = list.popLeft();
			expect(list.size).equal(1);
			expect(list.get(0)).equal(2);
			expect(actual).equal(1);
		});
		it<LocalTestContext>("The `popLeft()` should return null if the list is empty", ({
			list,
		}) => {
			expect(list.popLeft()).toBeNull();
		});
		it<LocalTestContext>("The `insertedAt()` should insert data at given index correctly", ({
			list,
		}) => {
			list.push(1);
			list.push(2);
			list.insertAt(1, 3);
			expect(list.size).equal(3);
			expect(list.get(1)).equal(3);
		});
		it<LocalTestContext>("The `insertedAt()` should throw Index out of bound if given index is invalid", ({
			list,
		}) => {
			list.push(1);
			expect(() => list.insertAt(4, 3)).toThrowError(/out of bound/);
			expect(() => list.insertAt(-2, 3)).toThrowError(/out of bound/);
		});
		it<LocalTestContext>("The `removeAt()` should remove a node at given index and return its data correctly", ({
			list,
		}) => {
			list.push(1);
			list.push(2);
			const actual = list.removeAt(1);
			expect(list.size).equal(1);
			expect(actual).equal(2);
		});
		it<LocalTestContext>("The `removeAt()` should throw Index out of bound if given index is invalid", ({
			list,
		}) => {
			list.push(1);
			expect(() => list.removeAt(4)).toThrowError(/out of bound/);
			expect(() => list.removeAt(-2)).toThrowError(/out of bound/);
		});
		it<LocalTestContext>("The `get()` function should return correct data at index 0", ({
			list,
		}) => {
			list.push(3);
			expect(list.get(0)).equal(3);
		});
		it<LocalTestContext>("The `get()` function should return null if given index is invalid", ({
			list,
		}) => {
			list.push(3);
			expect(list.get(1)).toBe(null);
			expect(list.get(-1)).toBe(null);
		});
		it<LocalTestContext>("The `get()` function should return null if list is empty", ({
			list,
		}) => {
			expect(list.get(0)).toBeNull();
		});
		it<LocalTestContext>("The `toArray()` should return an array with correct order of nodes in the list", ({
			list,
		}) => {
			list.push(1);
			list.push(2);
			list.push(3);
			list.push(4);
			const actual = list.toArray();
			const expected = [1, 2, 3, 4];
			expect(actual).toEqual(expected);
		});
	});
});
