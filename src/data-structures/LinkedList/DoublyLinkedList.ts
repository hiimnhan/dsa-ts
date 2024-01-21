import { DoublyLinkedListNode } from "./Node.js";
import * as LinkedList from "./interfaces.js";

interface DoublyLinkedListMethods<T> extends LinkedList.LinkedListMethods<T> {
	reverse(): DoublyLinkedList<T> | null;
}

class DoublyLinkedList<T> implements DoublyLinkedListMethods<T> {
	private _head: DoublyLinkedListNode<T> | null;
	private _tail: DoublyLinkedListNode<T> | null;
	private _size: number;
	constructor() {
		this._head = null;
		this._tail = null;
		this._size = 0;
	}

	/*
	 * Check if the list is empty
	 * @returns boolean value represents the list is empty or not
	 * */
	isEmpty(): boolean {
		return !this._head;
	}

	/*
	 * Insert the given data as a new node after the tail
	 * TC: constant O(1)
	 * @params data the data to be inserted
	 * */
	push(data: T): void {
		const node = new DoublyLinkedListNode(data);
		if (!this._head) {
			this._head = node;
		} else {
			this._tail!.next = node;
			node.prev = this._tail;
		}

		this._tail = node;
		this._size++;
	}

	/*
	 * Remove the current tail of the list
	 * TC: O(1)
	 *
	 * @returns the data of former tail
	 * */
	pop(): T | null {
		if (!this._head) {
			return null;
		}

		const currentTail = this._tail;
		if (this._head === this._tail) {
			this._head = null;
		} else {
			this._tail!.prev!.next = null;
		}

		this._tail = this._tail!.prev;
		this._size--;

		return currentTail!.data;
	}

	/*
	 * Insert the given data as a neww node before the head
	 * TC: O(1)
	 * @params data the data to be inserted
	 * */
	pushLeft(data: T): void {
		const node = new DoublyLinkedListNode(data);
		if (!this._head) {
			this._head = node;
			this._tail = node;
		} else {
			this._head.prev = node;
			node.next = this._head;
			this._head = node;
		}

		this._size++;
	}

	/*
	 * Remove the current head of the list
	 * TC: O(1)
	 * @returns the data of former head
	 * */
	popLeft(): T | null {
		if (!this._head) {
			return null;
		}

		const node = this._head;

		if (this._head === this._tail) {
			this._tail = null;
		} else {
			this._head.next!.prev = null;
		}

		this._head = this._head.next;
		this._size--;

		return node.data;
	}

	/*
	 * Insert the data as a new node at given index
	 * @param index The index where the node is inserted
	 * @param data The data to insert
	 * @throws Index out of bound if index is invalid
	 * */
	insertAt(index: number, data: T): void {
		if (index < 0 || index > this._size) {
			throw Error("Index out of bound");
		}

		if (index === 0) {
			this.pushLeft(data);
			return;
		}

		if (index === this._size) {
			this.push(data);
			return;
		}

		const newNode = new DoublyLinkedListNode(data);
		let prevNode: DoublyLinkedListNode<T> | null = this._head;

		for (let i = 0; i < index - 1; i++) {
			prevNode = prevNode!.next;
		}

		const nextNode = prevNode!.next;

		prevNode!.next = newNode;
		newNode.prev = prevNode;
		newNode.next = nextNode;
		nextNode!.prev = newNode;

		this._size++;
	}

	/*
	 * Remove a node at give index
	 * @param index The index of node to be removed
	 * @returns The data of removed node
	 * @throws Index out of bound if index is invalid
	 * */
	removeAt(index: number): T | null {
		if (index < 0 || index >= this._size) {
			throw new Error("Index out of bound");
		}

		if (this._size === 0) {
			throw new Error("List is empty");
		}

		if (index === 0) {
			return this.popLeft();
		}

		if (index === this._size - 1) {
			return this.pop();
		}

		let removedNode: DoublyLinkedListNode<T> | null = this._head;
		for (let i = 0; i < index; i++) {
			removedNode = removedNode!.next;
		}

		removedNode!.prev!.next = removedNode!.next;
		removedNode!.next!.prev = removedNode!.prev;

		this._size--;

		return removedNode!.data;
	}
	/*
	 * Get the data at given index
	 * TC: O(N)
	 * @param index The index of node
	 * @returns data of the node at given index
	 * */
	get(index: number): T | null {
		if (index < 0 || index > this._size) {
			return null;
		}

		if (!this._head) {
			return null;
		}

		let currentNode = this._head;

		for (let i = 0; i < index; i++) {
			if (!currentNode?.next) {
				return null;
			}

			currentNode = currentNode.next;
		}

		return currentNode.data;
	}

	/*
	 * Convert the list into array
	 * @returns The array represents the list
	 * */
	toArray(): T[] {
		const array: T[] = [];
		let currentNode = this._head;

		while (currentNode) {
			array.push(currentNode.data);
			currentNode = currentNode.next;
		}

		return array;
	}

	/*
	 * The size of the list
	 * @returns the size of the list;
	 * */
	get size(): number {
		return this._size;
	}

	/*
	 * Get the head of the list
	 * @returns The head node of the list
	 * */
	get head(): DoublyLinkedListNode<T> | null {
		return this._head;
	}

	/*
	 * Reverse the list
	 * @returns the reversed version of the list
	 * */
	reverse(): DoublyLinkedList<T> | null {
		if (!this._head) {
			return null;
		}

		let currentNode: DoublyLinkedListNode<T> | null = this._head;
		let nextNode: DoublyLinkedListNode<T> | null = null;
		let prevNode: DoublyLinkedListNode<T> | null = null;

		while (currentNode) {
			nextNode = currentNode.next;
			prevNode = currentNode.prev;

			currentNode.next = prevNode;
			currentNode.prev = nextNode;

			prevNode = currentNode;
			currentNode = nextNode;
		}

		this._tail = this._head;
		this._head = prevNode;

		return this;
	}
}

export default DoublyLinkedList;
