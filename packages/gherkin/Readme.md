# @hiherto-elements/gherkin

A simple Gherkin Parser that is based on [gherk](https://github.com/bakerface/gherk) - 'A minimalistic parser for the Gherkin syntax'

* code 100% es6 avoiding non standard code by relying on the import keyword instead medthod based, userland loaders
* This is intended to run in your browser. 
* with a little help from other modules, this can be easily used in node

# parser(text)

Given a feature file named **drink.feature** with the contents:

```javascript
let feature = `
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

  Scenario: Ghosts can drink
    Given 100 bottles of beer on the wall
    And there is nobody in the room
    When 5 bottles are taken down
    And they are floating in the air
    Then there are 95 bottles of beer on the wall
    And there are ghosts in the room
		`
```

When calling the `parse` function:

``` javascript

console.log(parse(feature));
```

Then the following JSON object is returned:

``` javascript
[
  {
    feature: 'Can drink beer when thirsty',
    perspective: 'drinker',
    desire: 'to take beer off the wall',
    reason: 'to satisfy my thirst',
    scenarios: [
      {
        scenario: 'Can take a single beer',
        given: [
          '100 bottles of beer on the wall'
        ],
        when: [
          'a bottle is taken down'
        ],
        then: [
          'there are 99 bottles of beer on the wall'
        ]
      },
      {
        scenario: 'Can take multiple beers',
        given: [
          '100 bottles of beer on the wall'
        ],
        when: [
          '5 bottles are taken down'
        ],
        then: [
          'there are 95 bottles of beer on the wall'
        ]
      },
      {
        scenario: 'Ghosts can drink',
        given: [
          '100 bottles of beer on the wall',
          'there is nobody in the room'
        ],
        when: [
          '5 bottles are taken down',
          'they are floating in the air'
        ],
        then: [
          'there are 95 bottles of beer on the wall',
          'there are ghosts in the room'
        ]
      }
    ]
  }
]
```
