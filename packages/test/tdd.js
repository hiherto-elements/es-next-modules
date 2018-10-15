
const suites = [];
const tests = [];

export const plan = () => {
	// run all describe/suite
	// suites.map(suite=>suite.suiteFn());
}

export const test = (name, test) => {
	tests.push({ name, test});
	let lastSuiteIndex = suites.length-1;
	suites[lastSuiteIndex].tests.push(tests.length-1)

};

export const stats = () => { 
		return {
			tests, suites
		}
};

export const suite = (name, suiteFn) => {
	let tests = [];
	suites.push({name, suiteFn, tests});
	suiteFn();
};


export const run = () => {
	suites.map(suite => suite.tests.map(testId => tests[testId].test()))
}