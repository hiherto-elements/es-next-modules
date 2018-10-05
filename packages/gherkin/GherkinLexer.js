import { Lexer } from './Lexer.js';
import { Feature } from './ast/Feature.js';  

const R_NEWLINE = /\r?\n/g;
const R_FEATURE = /^\s*Feature:(.*)$/;
const R_AS = /^\s*As (.*)$/;
const R_I_WANT = /^\s*I want (.*)$/;
const R_SO_THAT = /^\s*So that (.*)$/;
const R_IN_ORDER = /^\s*In order (.*)$/;
const R_SCENARIO = /^\s*Scenario:(.*)$/;
const R_GIVEN = /^\s*Given (.*)$/;
const R_WHEN = /^\s*When(.*)$/;
const R_THEN = /^\s*Then (.*)$/;
const R_AND = /^\s*And (.*)$/;
const R_BUT = /^\s*But (.*)$/;
const R_TAG = /^\s*\@(.*)$/;

export class GherkinLexer {

	construct() {

	}

	parse(text) {
		const lines = (text || '').toString().split(R_NEWLINE);
		return lines.map(line=>{
			console.log('l',line)
			let l = this.lex(line);
			return l;
		});
	}

	lex(content) {
		var row = 0;
		var col = 0;
		var char = 0;

		const features = [];
		const scenarios = [];

		var gherkinLexer = new Lexer(	function (char) {
			throw new Error("Unexpected character at row " + row + ", col " + col + ": " + char);
		});
	
		gherkinLexer.addRule(R_FEATURE, function (feature) {
			var f = new Feature(feature, feature, feature);
			features.push({
				feature: feature,
				object: f
			})
		});
		gherkinLexer.addRule(R_AS, function (scenario) {});
		gherkinLexer.addRule(R_I_WANT, function (scenario) {});
		gherkinLexer.addRule(R_IN_ORDER, function (scenario) {});
		gherkinLexer.addRule(R_GIVEN, function (scenario) {});
		gherkinLexer.addRule(R_WHEN, function (scenario) {});
		gherkinLexer.addRule(R_THEN, function (scenario) {});
		gherkinLexer.addRule(R_AND, function (scenario) {});
		gherkinLexer.addRule(R_BUT, function (scenario) {});
		gherkinLexer.addRule(R_TAG, function (scenario) {});
		
		gherkinLexer.addRule(R_SCENARIO, function (scenario) {
			scenarios.push(scenario)
		});
		
		gherkinLexer.setInput(content);

		gherkinLexer.lex();
		return { features, scenarios }
	}
}