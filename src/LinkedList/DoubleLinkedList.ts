import { DoubleLinkedListNode } from "./Node.js";
import * as LinkedList from "./types.js";

interface DoubleLinkedListMethods<U> extends LinkedList.LinkedListMethods<U> {
	traverseBack(): U[];
	displayBack(): void;
}

class DoubleLinkedList<U extends string | number>
	implements DoubleLinkedListMethods<U>
{
	private head: DoubleLinkedListNode<U> | null;
	private tail: DoubleLinkedListNode<U> | null;
	private length: number;

	constructor();
	constructor(data: U);
	constructor(data?: U) {
		this.head = data ? new DoubleLinkedListNode(data) : null;
		this.length = 0;
		this.tail = this.head;
	}

	_insertAtBegin(data: U): DoubleLinkedListNode<U> {
		const newNode = new DoubleLinkedListNode(data);
		if (!this.length) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head!.prev = newNode;
			this.tail = newNode;
		}

		this.length++;
		return newNode;
	}

	add(data: U): DoubleLinkedListNode<U> {
		const newNode = new DoubleLinkedListNode(data);
		if (!this.length) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail!.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return newNode;
	}

	insertAt(data: U, position: number): DoubleLinkedListNode<U> {
		if (position < 0 || position > this.length) {
			throw Error("Index out of bound");
		}

		if (position === 0) {
			return this._insertAtBegin(data);
		}

		if (position === this.length) {
			return this.add(data);
		}

		const newNode = new DoubleLinkedListNode(data);
		if (position < Math.floor(this.length / 2)) {
			let current = this.head;
			for (let i = 0; i < position - 1; i++) {
				current = current!.next;
			}

			newNode.prev = current;
			newNode.next = current!.next;
			current!.next!.prev = newNode;
			current!.next = newNode;
		} else {
			let current = this.tail;
			for (let i = this.length - 1; i > position; i--) {
				current = current!.prev;
			}

			newNode.next = current;
			newNode.prev = current!.prev;
			current!.prev!.next = newNode;
			current!.prev = newNode;
		}

		this.length++;
		return newNode;
	}

	deleteAt(position: number): U | null {
		if (position < 0 || position >= this.length) {
			console.log("Invalid position");
			return null;
		}

		let data: U;

		if (position === 0) {
			// Deleting from the front
			data = this.head!.data;
			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head!.next;
				this.head!.prev = null;
			}
		} else if (position === this.length - 1) {
			// Deleting from the end
			data = this.tail!.data;
			this.tail = this.tail!.prev;
			this.tail!.next = null;
		} else {
			// Deleting from the middle
			if (position < this.length / 2) {
				// Delete closer to the head
				let current = this.head;
				for (let i = 0; i < position; i++) {
					current = current!.next;
				}

				data = current!.data;
				current!.prev!.next = current!.next;
				current!.next!.prev = current!.prev;
			} else {
				// Delete closer to the tail
				let current = this.tail;
				for (let i = this.length - 1; i > position; i--) {
					current = current!.prev;
				}

				data = current!.data;
				current!.prev!.next = current!.next;
				current!.next!.prev = current!.prev;
			}
		}

		this.length--;
		return data;
	}

	private _addToArray(
		array: U[],
		node: DoubleLinkedListNode<U>,
		direction: "forward" | "backward" = "forward",
	): U[] {
		array.push(node.data);
		if (direction === "forward") {
			return node.next ? this._addToArray(array, node.next, "forward") : array;
		}

		return node.prev ? this._addToArray(array, node.prev, "backward") : array;
	}

	traverse(): U[] {
		const result: U[] = [];
		if (!this.head) {
			return result;
		}

		return this._addToArray(result, this.head);
	}

	traverseBack(): U[] {
		const result: U[] = [];
		if (!this.tail) {
			return result;
		}

		return this._addToArray(result, this.tail, "backward");
	}

	search(data: U): number {
		let current = this.head;
		let index = 0;

		while (current !== null) {
			if (current.data === data) {
				return index;
			}

			current = current.next;
			index++;
		}

		return -1; // Return -1 if the value is not found
	}

	display(): void {
		console.log(this.traverse());
	}

	displayBack(): void {
		console.log(this.traverseBack());
	}

	size(): number {
		return this.length;
	}
}

export default DoubleLinkedList;
