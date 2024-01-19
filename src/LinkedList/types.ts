import { DoubleLinkedListNode, SingleLinkedListNode } from "./Node.ts";

namespace LinkedList {
	export interface LinkedListMethods<U> {
		add(data: U): SingleLinkedListNode<U> | DoubleLinkedListNode<U>;
		insertAt(
			data: U,
			position: number,
		): SingleLinkedListNode<U> | DoubleLinkedListNode<U>;
		deleteAt(position: number): void;
		traverse(): U[];
		size(): number;
		search(data: U): SingleLinkedListNode<U> | DoubleLinkedListNode<U> | null;
		display(): void;
	}
}

export default LinkedList;
