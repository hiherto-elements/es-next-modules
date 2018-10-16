	
import InvalidValueException from './InvalidValueException.js';
import ValueConverter from './ValueConverter.js';

export class Assert
{
    /**
     * Asserts that value is an instance of (at least one) specific class.
     * @param {object} objectValue
     * @param {function} expectedInstance
     * @param {string} [message]
     */
    static instanceOf(objectValue, expectedInstance, message = "")
    {
        this.string(message, "Custom error message passed to Assert.instanceOf needs to be a valid string.");

        if (typeof objectValue !== 'object') {
            throw InvalidValueException.expected("object", objectValue, message);
        }

        if (!(objectValue instanceof expectedInstance)) {
            throw InvalidValueException.expected(
                expectedInstance.name,
                objectValue,
                message.length ? message : "Expected instance of \"${expected}\" but got \"${received}\"."
            );
        }
    }
     
    /**
     * Asserts that value is an instance of at least one specific class.
     * @param {object} objectValue
     * @param {array} expectedInstances
     * @param {string} [message]
     */   
    static instanceOneOf(objectValue, expectedInstances, message = "")
    {
        this.string(message, "Custom error message passed to Assert.instanceOf needs to be a valid string.");
        this.array(expectedInstances);

        let instance = expectedInstances.find((expectedInstance) => {
            return (objectValue instanceof expectedInstance)
        });

        if (instance === undefined) {
            throw InvalidValueException.expected(
                expectedInstances.map((instance) => {return ValueConverter.toString(instance); }).join(', '),
                objectValue,
                message.length ? message : "Expected instance of \"${expected}\" but got \"${received}\"."
            );
        }
    }

    /**
     * Asserts that value is valid integer
     * @param {int} integerValue
     * @param {string} [message]
     */
    static integer(integerValue, message = "")
    {
        this.string(message, "Custom error message passed to Assert.integer needs to be a valid string.");

        if (!Number.isInteger(integerValue)) {
            throw InvalidValueException.expected("integer", integerValue, message);
        }
    }

    /**
     * Asserts that value is valid number (integer, float)
     * @param {number} numberValue
     * @param {string} [message]
     */
    static number(numberValue, message = "")
    {
        this.string(message, "Custom error message passed to Assert.number needs to be a valid string.");

        if (typeof numberValue !== 'number') {
            throw InvalidValueException.expected("number", numberValue);
        }
    }

    /**
     * Assert that value is valid string
     * @param {string} stringValue
     * @param {string} [message]
     */
    static string(stringValue, message = "")
    {
        if (typeof message !== "string") {
            throw "Custom error message passed to Assert.string needs to be a valid string.";
        }

        if (typeof stringValue !== "string") {
            throw InvalidValueException.expected("string", stringValue, message);
        }
    }

    /**
     * Asserts that value is valid boolean  
     * @param {boolean} booleanValue
     * @param {string} [message]
     */
    static boolean(booleanValue, message = "")
    {
        this.string(message, "Custom error message passed to Assert.boolean needs to be a valid string.");

        if (typeof booleanValue !== 'boolean') {
            throw InvalidValueException.expected("boolean", booleanValue, message);
        }
    }

    /**
     * Asserts that expression or value is equal to true.
     * @param {boolean} value
     * @param {string} [message]
     */
    static true(value, message = "")
    {
        this.boolean(value);
        this.string(message, "Custom error message passed to Assert.true needs to be a valid string.");

        if (value !== true) {
            throw InvalidValueException.expected("true", value, message);
        }
    }

    /**
     * Asserts that expression or value is equal to false.
     * @param {boolean} value
     * @param {string} [message]
     */
    static false(value, message = "")
    {
        this.boolean(value);
        this.string(message, "Custom error message passed to Assert.false needs to be a valid string.");

        if (value !== false) {
            throw InvalidValueException.expected("false", value, message);
        }
    }
    
    /**
     * Asserts that value is equal to expected value
     * @param value
     * @param expectedValue
     * @param {string} [message]
     */
    static equal(value, expectedValue, message = "")
    {
        if (typeof value !== 'object') {
            this.true(value === expectedValue, message ? message : `Expected value ${ValueConverter.toString(value)} to be equals ${ValueConverter.toString(expectedValue)} but it's not.`);
        } else {
            this.objectEqual(value, expectedValue, message ? message : `Expected value ${ValueConverter.toString(value)} to be equals ${ValueConverter.toString(expectedValue)} but it's not.`);
        }
    }

    /**
     * Asserts that object is equal to expected object
     * @param value
     * @param otherValue
     * @param {string} [message]
     */
    static deepEqual(value, otherValue, message = "")
    {        
        this.string(message, "Custom error message passed to Assert.false needs to be a valid string.");
        
        let valueJson = JSON.stringify(value);
        let otherValueJson = JSON.stringify(otherValue);
        
        if (valueJson !== otherValueJson) {
            throw InvalidValueException.expected("value to deeply equal otherValue", JSON.stringify(value) + ' !== ' + JSON.stringify(otherValue) , message);
        }
    }

    /**
     * Asserts that object is equal to expected object
     * @param value
     * @param otherValue
     * @param {string} [message]
     */
    static objectEqual(value, otherValue, message) {
        return this.deepEqual(value, otherValue, message);
    }

    /**
     * @param value
     * @param otherValue
     * @param {string} [message]
     */
    static strictEqual(value, otherValue, message = "")
    {        
        this.string(message, "Custom error message passed to Assert.false needs to be a valid string.");

        if (value !== otherValue) {
            throw InvalidValueException.expected("value to strictly equal otherValue", value + ' !== ' + otherValue , message);
        }
    }

    /**
     * @param {boolean} value
     * @param {string} [message]
     */
    static ok(value, message = "")
    {        
        this.string(message, "Custom error message passed to Assert.false needs to be a valid string.");

        if (!value) {
            throw InvalidValueException.expected("truthy", typeof value + ' ' + value , message);
        }
    }


    /**
     * Asserts that value is valid object
     * @param {object} objectValue
     * @param {string} [message]
     */
    static object(objectValue, message = "")
    {
        this.string(message, "Custom error message passed to Assert.object needs to be a valid string.");

        if (typeof objectValue !== 'object') {
            throw InvalidValueException.expected("object", objectValue, message);
        }
    }

    /**
     * Asserts that object has function
     * @param {string} expectedFunctionName
     * @param {object} objectValue
     * @param {string} [message]
     */
    static hasFunction(expectedFunctionName, objectValue, message = "")
    {
        this.string(expectedFunctionName);
        this.object(objectValue);
        this.string(message, "Custom error message passed to Assert.hasFunction needs to be a valid string.");

        if (typeof objectValue[expectedFunctionName] !== 'function') {
            throw InvalidValueException.expected(`object to has function "${expectedFunctionName}"`, objectValue, message);
        }
    }

    /**
     * Asserts that object has property (it can also be a function)
     * @param {string} expectedPropertyName
     * @param {object} objectValue
     * @param {string} [message]
     */
    static hasProperty(expectedPropertyName, objectValue, message = "")
    {
        this.string(expectedPropertyName);
        this.object(objectValue);
        this.string(message, "Custom error message passed to Assert.hasProperty needs to be a valid string.");

        if (typeof objectValue[expectedPropertyName] === 'undefined') {
            throw InvalidValueException.expected(`object to has property "${expectedPropertyName}"`, objectValue, message);
        }
    }

    /**
     * Asserts that object has multiple properties
     * @param {array} expectedProperties
     * @param {object} objectValue
     * @param {string} [message]
     */
    static hasProperties(expectedProperties, objectValue, message = "")
    {
        this.object(objectValue);
        this.containsOnlyString(expectedProperties);
        this.string(message, "Custom error message passed to Assert.hasProperties needs to be a valid string.");

        expectedProperties.map((expectedProperty) => {
            if (typeof objectValue[expectedProperty] === 'undefined') {
                throw InvalidValueException.expected(`object to has properties "${expectedProperties.join(', ')}"`, objectValue, message);
            }
        });
    }

    /**
     * Asserts that value is valid array.
     * @param {array} arrayValue
     * @param {string} [message]
     */
    static array(arrayValue, message = "")
    {
        this.string(message, "Custom error message passed to Assert.array needs to be a valid string.");

        if (!Array.isArray(arrayValue)) {
            throw InvalidValueException.expected("array", arrayValue, message);
        }
    }

    /**
     * Asserts that value is one of expected values
     * @param {*} value
     * @param {array} expectedElements
     * @param {string} [message]
     */
    static oneOf(value, expectedElements, message = "")
    {
        this.string(message, "Custom error message passed to Assert.array needs to be a valid string.");
        this.array(expectedElements);

        let foundValue = expectedElements.find((expectedInstance) => {
            return value === expectedInstance;
        });

        if (foundValue === undefined) {
            throw InvalidValueException.expected(
                expectedElements.map((elemenet) => {return ValueConverter.toString(elemenet); }).join(', '),
                value,
                message.length ? message : "Expected one of \"${expected}\" but got \"${received}\"."
            );
        }
    }

    /**
     * Asserts that value is valid function
     * @param {function} functionValue
     * @param {string} [message]
     */
    static isFunction(functionValue, message = "")
    {
        this.string(message, "Custom error message passed to Assert.isFunction needs to be a valid string.");

        if (typeof functionValue !== 'function') {
            throw InvalidValueException.expected("function", functionValue, message);
        }
    }

    /**
     * Asserts that number is greater than
     * @param {int} expected
     * @param {int} integerValue
     * @param {string} [message]
     */
    static greaterThan(expected, integerValue, message = "")
    {
        this.number(expected);
        this.number(integerValue);
        this.string(message, "Custom error message passed to Assert.greaterThan needs to be a valid string.");

        if (integerValue <= expected) {
            throw message.length > 0 ? message : `Expected value ${integerValue} to be greater than ${expected}`;
        }
    }

    /**
     * Asserts that number is greater than or equal
     * @param {int} expected
     * @param {int} integerValue
     * @param {string} [message]
     */
    static greaterThanOrEqual(expected, integerValue, message = "")
    {
        this.number(expected);
        this.number(integerValue);
        this.string(message, "Custom error message passed to Assert.greaterThanOrEqual needs to be a valid string.");

        if (integerValue < expected) {
            throw message.length > 0 ? message : `Expected value ${integerValue} to be greater than ${expected} or equal`;
        }
    }

    /**
     * Asserts that number is less than
     * @param {int} expected
     * @param {int} integerValue
     * @param {string} [message]
     */
    static lessThan(expected, integerValue, message = "")
    {
        this.number(expected);
        this.number(integerValue);
        this.string(message, "Custom error message passed to Assert.lessThan needs to be a valid string.");

        if (integerValue >= expected) {
            throw message.length > 0 ? message : `Expected value ${integerValue} to be less than ${expected}`;
        }
    }

    /**
     * Asserts that number is less than or equal
     * @param {int} expected
     * @param {int} integerValue
     * @param {string} [message]
     */
    static lessThanOrEqual(expected, integerValue, message = "")
    {
        this.number(expected);
        this.number(integerValue);
        this.string(message, "Custom error message passed to Assert.lessThanOrEqual needs to be a valid string.");

        if (integerValue > expected) {
            throw message.length > 0 ? message : `Expected value ${integerValue} to be less than ${expected} or equal`;
        }
    }

    /**
     * Asserts that array contains only instances of specific class.
     * @param {array} arrayValue
     * @param {function} expectedInstance
     * @param {string} [message]
     */
    static containsOnly(arrayValue, expectedInstance, message = "")
    {
        this.array(arrayValue, "Assert.containsOnly require valid array, got \"${received}\".");
        this.string(message, "Custom error message passed to Assert.containsOnly needs to be a valid string.");

        for (let element of arrayValue) {
            try {
                this.instanceOf(element, expectedInstance, message);
            } catch (error) {
                throw InvalidValueException.expected(
                    expectedInstance.name,
                    element,
                    message.length ? message : "Expected instance of \"${expected}\" but got \"${received}\"."
                );
            }
        }
    }

    /**
     * Asserts that array contains only strings
     * @param {array} arrayValue
     * @param {string} [message]
     */
    static containsOnlyString(arrayValue, message = "")
    {
        this.array(arrayValue, "Assert.containsOnlyString require valid array, got \"${received}\".");
        this.string(message, "Custom error message passed to Assert.containsOnly needs to be a valid string.");

        for (let element of arrayValue) {
            try {
                this.string(element, message);
            } catch (error) {
                throw InvalidValueException.expected(
                    'string',
                    arrayValue.map((value) => { return ValueConverter.toString(value); }).join(', '),
                    message.length ? message : "Expected array of \"${expected}\" but got \"${received}\"."
                );
            }
        }
    }

    /**
     * Asserts that array contains only integers
     * @param {array} arrayValue
     * @param {string} [message]
     */
    static containsOnlyInteger(arrayValue, message = "")
    {
        this.array(arrayValue, "Assert.containsOnlyInteger require valid array, got \"${received}\".");
        this.string(message, "Custom error message passed to Assert.containsOnly needs to be a valid string.");

        for (let element of arrayValue) {
            try {
                this.integer(element, message);
            } catch (error) {
                throw InvalidValueException.expected(
                    'integer',
                    arrayValue.map((value) => { return ValueConverter.toString(value); }).join(', '),
                    message.length ? message : "Expected array of \"${expected}\" but got \"${received}\"."
                );
            }
        }
    }

    /**
     * Asserts that array contains only numbers
     * @param {array} arrayValue
     * @param {string} [message]
     */
    static containsOnlyNumber(arrayValue, message = "")
    {
        this.array(arrayValue, "Assert.containsOnlyNumber require valid array, got \"${received}\".");
        this.string(message, "Custom error message passed to Assert.containsOnly needs to be a valid string.");

        for (let element of arrayValue) {
            try {
                this.number(element, message);
            } catch (error) {
                throw InvalidValueException.expected(
                    'number',
                    arrayValue.map((value) => { return ValueConverter.toString(value); }).join(', '),
                    message.length ? message : "Expected array of \"${expected}\" but got \"${received}\"."
                );
            }
        }
    }

    /**
     * Asserts that array have specific number of elements
     * @param {int} expectedCount
     * @param {array} arrayValue
     * @param {string} [message]
     */
    static count(expectedCount, arrayValue, message = "")
    {
        this.integer(expectedCount);
        this.array(arrayValue);
        this.string(message, "Custom error message passed to Assert.count needs to be a valid string.");

        if (arrayValue.length !== expectedCount) {
            throw message.length ? message : `Expected count ${expectedCount}, got ${arrayValue.length}`;
        }
    }

    /**
     * Asserts that array is not empty
     * @param {*} value
     * @param {string} [message]
     */
    static notEmpty(value, message = "")
    {
        this.string(message, "Custom error message passed to Assert.empty needs to be a valid string.");

        if (value.length === 0) {
            throw InvalidValueException.expected("not empty value", value, message);
        }
    }


    /**
     * Asserts that value is odd number
     * @param {int} integerValue
     * @param {string} [message]
     */
    static oddNumber(integerValue, message = "")
    {
        this.integer(integerValue);
        this.string(message, "Custom error message passed to Assert.oddNumber needs to be a valid string.");

        if ((integerValue % 2) !== 1) {
            throw InvalidValueException.expected("odd number", integerValue, message);
        }
    }

    /**
     * Asserts that value is even number
     * @param {int} integerValue
     * @param {string} [message]
     */
    static evenNumber(integerValue, message = "")
    {
        this.integer(integerValue);
        this.string(message, "Custom error message passed to Assert.evenNumber needs to be a valid string.");

        if ((integerValue % 2) !== 0) {
            throw InvalidValueException.expected("even number", integerValue, message);
        }
    }

    /**
     * Asserts that value is valid json string
     * @param {string} stringValue
     * @param {string} [message]
     */
    static jsonString(stringValue, message = "")
    {
        this.string(stringValue);
        this.string(message, "Custom error message passed to Assert.jsonString needs to be a valid string.");

        try {
            JSON.parse(stringValue);
        } catch (e) {
            throw InvalidValueException.expected("json string", stringValue, message);
        }
    }

    /**
     * Asserts that string is valid email address.
     * @param {string} emailValue
     * @param {string} [message]
     */
    static email(emailValue, message = "")
    {
        this.string(emailValue);
        this.string(message, "Custom error message passed to Assert.email needs to be a valid string.");

        let regexp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if (!regexp.test(emailValue)) {
            throw InvalidValueException.expected("valid email address", emailValue, message);
        }
    }

    /**
     * Asserts that string is valid url
     * @param {string} urlValue
     * @param {string} [message]
     */
    static url(urlValue, message = "")
    {
        this.string(urlValue);
        this.string(message, "Custom error message passed to Assert.url needs to be a valid string.");

        let regexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

        if (!regexp.test(urlValue)) {
            throw InvalidValueException.expected("valid url", urlValue, message);
        }
    }

    /**
     * Asserts that string is valid UUID
     * @param {string} uuidValue
     * @param {string} [message]
     */
    static uuid(uuidValue, message = "")
    {
        this.string(uuidValue);
        this.string(message, "Custom error message passed to Assert.uuid needs to be a valid string.");

        let regexp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        if (!regexp.test(uuidValue)) {
            throw InvalidValueException.expected("valid uuid", uuidValue, message);
        }
    }

    /**
     * Asserts that element has other element under selector.
     * @param {string} selector
     * @param {HTMLElement|HTMLDocument} htmlElement
     * @param {string} [message]
     */
    static hasElement(selector, htmlElement, message = "")
    {
        this.string(selector);
        this.instanceOneOf(htmlElement, [HTMLElement, HTMLDocument]);
        this.string(message, "Custom error message passed to Assert.hasProperty needs to be a valid string.");

        if (null === htmlElement.querySelector(selector)) {
            throw InvalidValueException.expected(`html element to has element under selector "${selector}"`, htmlElement.outerHTML, message);
        }
    }

    /**
     * Asserts that element has expected attribute (it might be empty)
     * @param {string} attributeName
     * @param {HTMLElement} htmlElement
     * @param {string} [message]
     */
    static hasAttribute(attributeName, htmlElement, message = "")
    {
        this.string(attributeName);
        this.instanceOf(htmlElement, HTMLElement);
        this.string(message, "Custom error message passed to Assert.hasAttribute needs to be a valid string.");

        let attribute = htmlElement.getAttribute(attributeName);

        if (null ===  attribute) {
            throw InvalidValueException.expected(`html element with attribute "${attributeName}"`, htmlElement.outerHTML, message);
        }
    }

    /**
     * Asserts that element has expected attributes (it might be empty)
     * @param {array} attributes
     * @param {HTMLElement} htmlElement
     * @param {string} [message]
     */
    static hasAttributes(attributes, htmlElement, message = "")
    {
        this.containsOnlyString(attributes);
        this.instanceOf(htmlElement, HTMLElement);
        this.string(message, "Custom error message passed to Assert.hasAttributes needs to be a valid string.");

        attributes.map((attribute) => {
            try {
                this.hasAttribute(attribute, htmlElement)
            } catch (e) {
                throw InvalidValueException.expected(`html element with attributes "${attributes.join(', ')}"`, htmlElement.outerHTML, message);
            }
        })
    }
}
