
import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { parse } from '../parse.js';
Assert.isFunction(parse, 'Parse is a function');
Assert.array(parse(), 'Parsing undefined results in a empty array');

let featureText = `Feature: Can drink beer when thirsty
  As a drinker
  I want to take beer off the wall
  In order to satisfy my thirst

  Scenario: Can take a single beer
    Given 100 bottles of beer on the wall
    When a bottle is taken down
		Then there are 99 bottles of beer on the wall
		And Then foo

	Scenario: Bar
		Given 200 Bottles are sold
		When the Barkeeper deilvers them 
		Then the Baarkeeper is tired
`;

let parsed = parse(featureText);

Assert.array(parsed, 'The result is an array');
Assert.equal(parsed.length, 1, 'There was one feature, so there is one result');

let feature = parsed[0];

let props = ['feature', 'scenarios', 'perspective', 'desire', 'reason'];
props.map(prop => Assert.hasProperty(prop, feature, `the parsed feature is expected to host the property ${prop}`))
Assert.equal(feature.scenarios.length, 2, 'has found 2 scenarios');

let scenarioWithTag = `
Feature: With Tag
As a drinker
I want to take beer off the wall
In order to satisfy my thirst

@foo
Scenario: Can take a single beer
	Given 100 bottles of beer on the wall
	When a bottle is taken down
	Then there are 99 bottles of beer on the wall
	And Then foo
`;

let parsedWithTag = parse(scenarioWithTag);