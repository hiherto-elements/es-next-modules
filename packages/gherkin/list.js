export const list = (allFeatures)=>{ 
    
    function flatten(arr) {
		return arr.reduce(function (flat, toFlatten) {
			return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		}, []);
	}

    let all =  allFeatures.map(feature => {
        var featureName = feature.feature;
        return feature.scenarios.map(scenario => {
            return {
                feature: featureName, 
                scenario: scenario.scenario
            }
        })
    })
    return flatten(all);
};