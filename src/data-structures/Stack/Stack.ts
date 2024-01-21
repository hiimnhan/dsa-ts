import SinglyLinkedList from "../LinkedList/SinglyLinkedList.js";
import { StackMethods } from "./interfaces.js";

export default class Stack<T> implements StackMethods<T> {
	private _list: SinglyLinkedList<T>;
	constructor() {
		this._list = new SinglyLinkedList<T>();
	}

	/*
	 * Check if the stack is empty
	 * @returns {boolean} Whether the stack is empty or not
	 * */
	isEmpty(): boolean {
		return this._list.isEmpty();
	}

	/*
	 * Add data to the stack
	 * @param data data to be added
	 * */
	push(data: T): void {
		this._list.push(data);
	}

	/*
	 * Remove the data at top of the stack and return it
	 * @returns the data at the top of the stack
	 * */
	pop(): T | null {
		return this._list.pop();
	}

	/*
	 * Return the data at the top of the stack
	 * @returns the data at the top of the stack
	 * */
	top(): T | null {
		return this._list.get(this._list.size - 1);
	}

	toArray(): T[] {
		return this._list.toArray();
	}

	get length(): number {
		return this._list.size;
	}
}
