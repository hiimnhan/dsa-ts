import { DoubleLinkedListNode, SingleLinkedListNode } from "./Node.ts";

export interface LinkedListMethods<U> {
	add(data: U): SingleLinkedListNode<U> | DoubleLinkedListNode<U>;
	insertAt(
		data: U,
		position: number,
	): SingleLinkedListNode<U> | DoubleLinkedListNode<U>;
	deleteAt(position: number): U | null;
	traverse(): U[];
	size(): number;
	search(data: U): number;
	display(): void;
}
