import DoublyLinkedList from "../LinkedList/DoublyLinkedList.js";
import { QueueMethods } from "./interfaces.js";

/*
 * Implement Queue by using DoublyLinkedList for O(1) enqueue and dequeue
 * */
export default class Queue<T> implements QueueMethods<T> {
	private _list: DoublyLinkedList<T>;

	constructor() {
		this._list = new DoublyLinkedList<T>();
	}

	/*
	 * Add item to the queue
	 * @returns data to be added
	 * */
	enqueue(data: T): void {
		this._list.push(data);
	}

	/*
	 * Remove item at the front of the  queue and return the data of it
	 * */
	dequeue(): T | null {
		return this._list.popLeft();
	}

	/*
	 * Return the item in the front of the queue
	 * @returns The item at the front of the queue or null if queue is empty
	 * */
	peek(): T | null {
		return this._list.get(0);
	}

	/*
	 * Check if queue is empty
	 * @returns {boolean} Whether the queue is empty or not
	 * */
	isEmpty(): boolean {
		return this._list.isEmpty();
	}

	toArray(): T[] {
		return this._list.toArray();
	}

	get length(): number {
		return this._list.size;
	}
}
