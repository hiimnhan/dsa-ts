import { describe } from "vitest";
import SingleLinkedList from "../SingleLinkedList.ts";
import { test } from "vitest";
import { expect } from "vitest";

describe("SingleLinkedList", () => {
	describe("Create instance", () => {
		test("should initialize with size 0 and empty head", () => {
			const list = new SingleLinkedList();
			expect(list.size()).equal(0);
		});
		test("should initialize with size 1 and get a head if init with params", () => {
			const list = new SingleLinkedList<number>(0);
			expect(list.size()).equal(1);
		});
	});
});
