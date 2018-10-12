
const suites = [];
const tests = [];

export const plan = () => {
	// run all describe/suite
	suites.map(suite=>suite.suiteFn());
}

export const test = (name, test) => {
	tests.push({ name, test});
};

export const stats = () => { 
		return {
			tests, suites
		}
};

export const suite = (name, suiteFn) => {
		suites.push({name, suiteFn});
};