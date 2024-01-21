export interface StackMethods<T> {
	isEmpty(): boolean;
	push(data: T): void;
	pop(): T | null;
	top(): T | null;
	toArray(): T[];
	get length(): number;
}
