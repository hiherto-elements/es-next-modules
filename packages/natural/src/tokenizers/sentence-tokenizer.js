import Tokenizer from './tokenizer.js';

export class SentenceTokenizer extends Tokenizer{
    tokenize(text) {
        // break string up in to sentences based on punctation and quotation marks
        let tokens = text.match(/([\"\'\‘\“\'\"\[\(\{\⟨][^\.\?\!]+[\.\?\!][\"\'\’\”\'\"\]\)\}\⟩]|[^\.\?\!]+[\.\?\!\s]+)\s?/g);

        // remove unecessary white space
        tokens = tokens.map(Function.prototype.call, String.prototype.trim);

        return this.trim(tokens);
    }
}

export default SentenceTokenizer;