import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { parse } from '../parse.js';
import { list } from '../list.js';

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
    Scenario: Baz
		Given 200 Bottles are sold
		When the Barkeeper deilvers them 
        Then the Baarkeeper is tired
Feature: Hallo
    Scenario: Baz
		Given 200 Bottles are sold
		When the Barkeeper deilvers them 
        Then the Baarkeeper is tired
    
`;
 let parsed = parse(featureText);
 let scenarioList = list(parsed);
 Assert.notEmpty(scenarioList)
console.log(scenarioList)