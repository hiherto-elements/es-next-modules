export const stats = (parsedFeature)=>{
	
	const features = parsedFeature.length;
	const add = (a, b) => a + b;
	
	function flatten(arr) {
		return arr.reduce(function (flat, toFlatten) {
			return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		}, []);
	}
	
	const scenarios = parsedFeature.map(feature => feature.scenarios.length).reduce(add);

	var given = parsedFeature
									.map(feature => feature.scenarios.map(scenario => scenario.given));

	given = flatten(given).length;	
	
	var when = parsedFeature
									.map(feature => feature.scenarios.map(scenario => scenario.when));

	when = flatten(when).length;	
	
	var then = parsedFeature
									.map(feature => feature.scenarios.map(scenario => scenario.then));

	then = flatten(then).length;	

	const score = features + scenarios + given + when + then;

	return {
		score, 
		features, 
		scenarios,
		given, 
		when, 
		then
	}
};