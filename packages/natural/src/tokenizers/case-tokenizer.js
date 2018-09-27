import Tokenizer from './tokenizer';

export class CaseTokenizer extends Tokenizer {
  constructor() {
    super();
  }

  attach() {
    const self = this;

    String.prototype.tokenize = function(preserveApostrophe) {
      return self.tokenize(this, preserveApostrophe);
    }
  }

  // Idea from Seagull: http://stackoverflow.com/a/26482650
  tokenize(text, preserveApostrophe) {
    const whitelist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const lower = text.toLowerCase();
    const upper = text.toUpperCase();
    let result = '';
    let i;

    for (i = 0; i < lower.length; ++i) {
      if (lower[i] !== upper[i] || whitelist.includes(lower[i]) || (text[i] === '\'' && preserveApostrophe)) {
        result += text[i];
      } else {
        result += ' ';
      }
    }

    return this.trim(result.replace(/\s+/g, ' ').split(' '));
  }
}

export default CaseTokenizer;