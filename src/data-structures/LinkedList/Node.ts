class SinglyLinkedListNode<T> {
	next: SinglyLinkedListNode<T> | null;
	data: T;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class DoubleLinkedListNode<T> {
	prev: DoubleLinkedListNode<T> | null;
	next: DoubleLinkedListNode<T> | null;
	data: T;
	constructor(data: T) {
		this.prev = null;
		this.data = data;
		this.next = null;
	}
}

export { SinglyLinkedListNode, DoubleLinkedListNode };
