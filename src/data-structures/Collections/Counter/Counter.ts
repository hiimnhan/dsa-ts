import CounterMethods from "./interface.js";

export default class Counter implements CounterMethods {
	private _map: Map<string | number, number>;
	constructor(iterable?: Iterable<string | number>) {
		this._map = new Map();
		if (iterable) {
			this._update(iterable);
		}
	}

	private _incr(key: string | number, value = 1) {
		const count = this._map.get(key) ?? 0;
		this._map.set(key, count + value);
	}

	private _update(iterable: Iterable<string | number>) {
		for (const item of iterable) {
			this._incr(item);
		}
	}

	elements(): [string | number, number][] {
		return [...this._map.entries()];
	}

	mostCommon(n?: number | undefined): [string | number, number][] {
		const sortedCounts = [...this._map.entries()].sort((a, b) => b[1] - a[1]);
		if (n === undefined) {
			return sortedCounts;
		}

		return sortedCounts.slice(0, n);
	}

	update(counter: Counter): Counter {
		for (const [key, val] of counter.elements()) {
			this._incr(key, val);
		}

		return this;
	}

	/*
	 * @returns return the value of the key. If key is not in the counter return null
	 * */
	get(key: string | number): number | null {
		return this._map.get(key) ?? null;
	}

	set(key: string | number, value = 1): void {
		this._incr(key, value);
	}

	delete(key: string | number): boolean {
		return this._map.delete(key);
	}
}
