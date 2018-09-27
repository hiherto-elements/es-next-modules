export class Bag {
	constructor() {
			this.dictionary = [];
			this.nElement = 0;
	}

	add(element) {
			this.dictionary.push(element);
			this.nElement++;
			return this;
	}

	isEmpty() {
			return this.nElement > 0;
	}

	contains(item) {
			return this.dictionary.includes(item);
	}

	/**
	 * unpack the bag , and get all items
	 */
	unpack() {
			// return a copy is better than original
			return this.dictionary.slice();
	}
}