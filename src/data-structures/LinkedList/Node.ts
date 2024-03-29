class SinglyLinkedListNode<T> {
	next: SinglyLinkedListNode<T> | null;
	data: T;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class DoublyLinkedListNode<T> {
	prev: DoublyLinkedListNode<T> | null;
	next: DoublyLinkedListNode<T> | null;
	data: T;
	constructor(data: T) {
		this.prev = null;
		this.data = data;
		this.next = null;
	}
}

export { SinglyLinkedListNode, DoublyLinkedListNode };
