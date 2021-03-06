import Tag from './Tag.js';
import Step from './Step.js';
import {normalize} from './utils.js';

/**
 * Model of a Cucumber Feature element
 * @class
 */
export class Element {
    /**
     * @constructor
     * @param {string} keyword The keyword of the scenario
     * @param {string} name The name of the scenario
     * @param {string} description The description of the scenario
     */
    constructor(keyword, name, description) {
        /** @member {string} */
        this.keyword = normalize(keyword);
        /** @member {string} */
        this.name = normalize(name);
        /** @member {string} */
        this.description = normalize(description);
        /** @member {Array<Step>} */
        this.steps = [];
    }

    /**
     * Sets the keywords of all step to normal keywords,
     * i.e. Given, When, Then.
     */
    useNormalStepKeywords() {
        this.steps.forEach((step, i) => {
            if (i && ['And', 'But'].includes(step.keyword)) {
                step.keyword = this.steps[i - 1].keyword;
            }
        });
    }

    /**
     * Sets the keywords of steps to more readable ones,
     * if applicable, i.e. replaces multiple normal keywords
     * with And keyword.
     */
    useReadableStepKeywords() {
        this.useNormalStepKeywords();
        for (let i = this.steps.length - 1; i > 0; --i) {
            if (this.steps[i].keyword === this.steps[i - 1].keyword) {
                this.steps[i].keyword = 'And';
            }
        }
    }
}

export default Element;