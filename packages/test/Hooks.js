export class Hooks extends Map {

	constructor(hooks) {
		hooks = new Map(hooks);
		for (const [key, set] of hooks) {
			hooks.set(key, new Set([...set].filter((fn) => fn.isGlobal)));
		}
		super(hooks);
	}

	get(key) {
		if (!super.has(key)) {
			super.set(key, new Set());
		}
		return super.get(key);
	}

	add(object, globalFlag = false) {
		for (const key of Object.keys(object)) {
			const fn = object[key];
			if (typeof fn === 'function') {
				fn.isGlobal = globalFlag;
				this.get(key).add(fn);
			}
		}
	}

	call(key, ...args) {
		return [...this.get(key)]
		.reduce(
			(promise, fn) => promise.then(() => fn(...args)),
			key === 'all' ? Promise.resolve() : this.call('all', key, ...args)
		);
	}

}