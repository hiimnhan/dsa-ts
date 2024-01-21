export interface QueueMethods<T> {
	enqueue(data: T): void;
	dequeue(): T | null;
	peek(): T | null;
	isEmpty(): boolean;
	toArray(): T[];
	get length(): number;
}
