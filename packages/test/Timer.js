export class Timer {

	constructor(timeout) {
		this.timeout = timeout;
	}

	start() {
		this.startTime = process.hrtime();
		return new Promise((resolve, reject) => {
			this.timer = setTimeout(() => {
				reject(Object.assign(
					new Error(`Timeout of ${this.timeout}ms exceeded`),
					{code: 'ETIMEOUT'}
				));
			}, this.timeout);
		});
	}

	stop() {
		clearTimeout(this.timer);
		const [s, ns] = process.hrtime(this.startTime);
		return s + (ns / 1e9);
	}

}