import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import  { GherkinLexer } from '../GherkinLexer.js';
var lexer = new GherkinLexer();


const feature = `Feature: hello`;

const featureWithStory = `
Feature: hello`;

var res = lexer.parse(feature);
Assert.array(res);

res = lexer.parse(featureWithStory);
Assert.array(res);

res = lexer.parse('Scenario: Bar');

res = lexer.parse(`Feature: Foo
Scenario: Bar`);
console.log(res)

let bigFeature = `
Feature: Can drink beer when thirsty
  As a drinker
  I want to take beer off the wall
  In order to satisfy my thirst

  Scenario: Can take a single beer
    Given 100 bottles of beer on the wall
    When a bottle is taken down
    Then there are 99 bottles of beer on the wall

  Scenario: Can take multiple beers
    Given 100 bottles of beer on the wall
    When 5 bottles are taken down
    Then there are 95 bottles of beer on the wall

	@tag
  Scenario: Ghosts can drink
    Given 100 bottles of beer on the wall
    And there is nobody in the room
    When 5 bottles are taken down
    And they are floating in the air
    Then there are 95 bottles of beer on the wall
		And there are ghosts in the room
		But Foo

`;

res = lexer.parse(bigFeature);
console.log(res)




