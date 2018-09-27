
export class Tokenizer {
  trim(array) {
    while (array[array.length - 1] == '')
      array.pop();

    while (array[0] == '')
      array.shift();

    return array;
  }

  // Expose an attach function that will patch String with new methods.
  attach() {
    const self = this;

    String.prototype.tokenize = function() {
      return self.tokenize(this);
    }
  }

  tokenize() {}
}

export default Tokenizer;