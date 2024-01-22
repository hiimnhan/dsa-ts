import Heap from "./Heap.js";

export default class MaxHeap<T> extends Heap<T> {
	constructor() {
		super();
	}

	protected bubbleUp(index: number): void {
		if (index <= 0) {
			return;
		}

		const parentIndex = this.getParentIndex(index);

		if (this.heap[parentIndex] < this.heap[index]) {
			this.swap(parentIndex, index);
			this.bubbleUp(parentIndex);
		}
	}

	protected sinkDown(index: number): void {
		const leftChildIndex = this.getLeftChildIndex(index);
		const rightChildIndex = this.getRightChildIndex(index);
		let largest = index;

		if (
			leftChildIndex < this.heap.length &&
			this.heap[leftChildIndex] > this.heap[largest]
		) {
			largest = leftChildIndex;
		}

		if (
			rightChildIndex < this.heap.length &&
			this.heap[rightChildIndex] > this.heap[largest]
		) {
			largest = rightChildIndex;
		}

		if (largest !== index) {
			this.swap(index, largest);
			this.sinkDown(largest);
		}
	}
}
