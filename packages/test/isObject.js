export const isObject = function isObject(x) {
	if (!x) {
		return false;
	}
	const type = typeof x;
	return type === 'object' || type === 'function';
};