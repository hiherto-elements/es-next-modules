export const stats = (parsedFeature)=>{
	
	const features = parsedFeature.length;
	const add = (a, b) => a + b;
    
	const scenarios = parsedFeature.map(feature => feature.scenarios.length).reduce(add);

	const given = parsedFeature
									.map(feature => feature.scenarios.map(scenario => scenario.given)
									.flat()).flat().length;

	const when = parsedFeature
				.map(feature => feature.scenarios.map(scenario => scenario.when)
				.flat()).flat().length;
			
	const then = parsedFeature
				.map(feature => feature.scenarios.map(scenario => scenario.then)
				.flat()).flat().length;

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