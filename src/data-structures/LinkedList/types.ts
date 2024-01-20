import { DoubleLinkedListNode, SinglyLinkedListNode } from "./Node.ts";

export interface LinkedListMethods<T> {
	isEmpty(): boolean;
	push(data: T): void;
	pop(): T;
	pushLeft(data: T): void;
	popLeft(): T;
	insertAt(index: number, data: T): void;
	removeAt(index: number): T | null;
	get(index: number): T | null;
	toArray(): T[];
	get size(): number;
	get head(): SinglyLinkedListNode<T> | DoubleLinkedListNode<T> | null;
}
