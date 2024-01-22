export default abstract class Heap<T> {
	protected heap: T[];

	constructor() {
		this.heap = [];
	}

	protected abstract bubbleUp(index: number): void;
	protected abstract sinkDown(index: number): void;

	protected getLeftChildIndex(index: number): number {
		return 2 * index + 1;
	}

	protected getRightChildIndex(index: number): number {
		return 2 * index + 2;
	}

	protected getParentIndex(index: number): number {
		return Math.floor((index - 1) / 2);
	}

	protected swap(index1: number, index2: number): void {
		const temp = this.heap[index1];
		this.heap[index1] = this.heap[index2];
		this.heap[index2] = temp;
	}

	heapify(array: T[]): T[] {
		this.heap = [...array];
		const lastParentIndex = Math.floor((this.heap.length - 2) / 2);

		for (let i = lastParentIndex; i >= 0; i--) {
			this.sinkDown(i);
		}

		return this.heap;
	}

	push(data: T): void {
		this.heap.push(data);
		this.bubbleUp(this.heap.length - 1);
	}

	pop(): T | undefined {
		if (this.heap.length === 0) {
			return undefined;
		}

		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const top = this.heap[0];
		this.heap[0] = this.heap.pop() as T;
		this.sinkDown(0);

		return top;
	}

	size(): number {
		return this.heap.length;
	}
}
