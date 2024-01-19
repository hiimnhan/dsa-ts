import { SingleLinkedListNode } from "./Node.js";
import * as LinkedList from "./types.js";

class SingleLinkedList<U extends string | number>
	implements LinkedList.LinkedListMethods<U>
{
	private head: SingleLinkedListNode<U> | null;
	private length: number;
	constructor();
	constructor(data: U);
	constructor(data?: U) {
		this.head = data ? new SingleLinkedListNode(data) : null;
		this.length = 0;
	}

	private _insertAtBegin(data: U): SingleLinkedListNode<U> {
		const node = new SingleLinkedListNode(data);
		if (!this.head) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;

		return node;
	}

	add(data: U): SingleLinkedListNode<U> {
		const node = new SingleLinkedListNode(data);
		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.length++;
		return node;
	}

	insertAt(data: U, position: number): SingleLinkedListNode<U> {
		if (position === 0 || !this.head) {
			return this._insertAtBegin(data);
		}

		if (position < 0 || position > this.length) {
			throw Error("Index out of bound");
		}

		let node = this.head;

		while (--position) {
			if (node.next) {
				node = node.next;
			} else {
				throw Error("Index out of bound");
			}
		}

		const temp = node.next;
		const newNode = new SingleLinkedListNode(data);
		node.next = newNode;
		newNode.next = temp;

		this.length++;
		return newNode;
	}

	deleteAt(position: number): U | null {
		if (!this.head) {
			return null;
		}

		if (position < 0 || position > this.length) {
			return null;
		}

		let node = this.head;

		if (position === 0) {
			this.head = node.next;
			return node.data;
		}

		while (--position) {
			if (node.next) {
				node = node.next;
			} else {
				return null;
			}
		}

		if (!node?.next) {
			return null;
		}

		const next = node.next.next;
		node.next = next;
		this.length--;
		return node.data;
	}

	private _addToArray(array: U[], node: SingleLinkedListNode<U>): U[] {
		array.push(node.data);
		return node.next ? this._addToArray(array, node.next) : array;
	}

	traverse(): U[] {
		const result: U[] = [];
		if (!this.head) {
			return result;
		}

		return this._addToArray(result, this.head);
	}

	size(): number {
		return this.length;
	}

	search(data: U): number {
		let node = this.head;
		let position = 0;

		while (node) {
			if (node.data === data) {
				return position;
			}

			node = node.next;
			position++;
		}

		return -1;
	}

	display(): void {
		console.log(this.traverse());
	}
}

export default SingleLinkedList;
