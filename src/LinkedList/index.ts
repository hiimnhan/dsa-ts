import { SingleLinkedListNode } from "./Node.ts";
import LinkedList from "./types.ts";

class SingleLinkedList<U extends string | number>
	implements LinkedList.LinkedListMethods<U>
{
	private head: SingleLinkedListNode<U> | null;
	constructor();
	constructor(data: U);
	constructor(data?: U) {
		this.head = data ? new SingleLinkedListNode(data) : null;
	}

	private _insertAtBegin(data: U): SingleLinkedListNode<U> {
		const node = new SingleLinkedListNode(data);
		if (!this.head) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

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

		return node;
	}

	insertAt(data: U, position: number): SingleLinkedListNode<U> {
		if (position === 0 || !this.head) {
			return this._insertAtBegin(data);
		}

		if (position < 0) {
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

		return newNode;
	}

	deleteAt(position: number): void {
		if (!this.head) {
			return;
		}

		if (position < 0) {
			throw Error("Index out of bound");
		}

		let node = this.head;

		if (position === 0) {
			this.head = node.next;
			return;
		}

		while (--position) {
			if (node.next) {
				node = node.next;
			} else {
				throw Error("Index out of bound");
			}
		}

		if (!node?.next) {
			return;
		}

		const next = node.next.next;
		node.next = next;
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
		return this.traverse().length;
	}

	search(data: U): SingleLinkedListNode<U> | null {
		let node = this.head;

		while (node) {
			if (node.data === data) {
				return node;
			}

			node = node.next;
		}

		return null;
	}

	display(): void {
		console.log(this.traverse());
	}
}

export { SingleLinkedList };
