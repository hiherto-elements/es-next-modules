import MessageFactory from './MessageFactory.js';
import ValueConverter from './ValueConverter.js';

class InvalidValueException
{
    /**
     * @param {string} type
     * @param {*} value
     * @param {string} [message]
     * @returns {Error}
     */
    static expected(type, value, message = "")
    {
        if (typeof message !== 'string') {
            throw new Error(`Expected string but got "${ValueConverter.toString(message)}".`);
        }

        if (message.length) {
            return new Error(MessageFactory.create(message, {expected: type, received: ValueConverter.toString(value)}));
        }

        return new Error(`Expected ${type} but got "${ValueConverter.toString(value)}".`);
    }
}


export default InvalidValueException;