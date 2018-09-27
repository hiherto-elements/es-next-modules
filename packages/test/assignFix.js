export function assignFix(object, properties) {
	return Object
		.defineProperties(object, Object
																.keys(properties)
																.reduce((results, key) => Object.assign(results, {[key]: {value: properties[key]}}), {}));
}