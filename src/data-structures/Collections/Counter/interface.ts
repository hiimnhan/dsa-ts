import Counter from "./Counter.js";

export default interface CounterMethods {
	elements(): [string | number, number][];
	mostCommon(n?: number): [string | number, number][];
	update(counter: Counter): Counter;
	get(key: string | number): number | null;
	set(key: string | number, value: number): void;
	delete(key: string | number): boolean;
}
