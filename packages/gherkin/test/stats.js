
import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { parse } from '../parse.js';
import { stats } from '../stats.js';

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
let statistics = stats(parsed);
Assert.equal(statistics.features, 1);
Assert.equal(statistics.scenarios, 2);
Assert.equal(statistics.given, 2);
Assert.equal(statistics.when, 2);
Assert.equal(statistics.then, 3);

const otherFeature = `

Feature: Can drink beer when thirsty
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
let otherParsed = parse(otherFeature);
let otherStats = stats(otherParsed);

Assert.equal(otherStats.features, 1);
Assert.equal(otherStats.scenarios, 2);
Assert.equal(otherStats.given, 2);
Assert.equal(otherStats.when, 2);
Assert.equal(otherStats.then, 3);