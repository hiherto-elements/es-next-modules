'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokenizer = exports.Tokenizer = function () {
  function Tokenizer() {
    _classCallCheck(this, Tokenizer);
  }

  _createClass(Tokenizer, [{
    key: 'trim',
    value: function trim(array) {
      while (array[array.length - 1] == '') {
        array.pop();
      }while (array[0] == '') {
        array.shift();
      }return array;
    }

    // Expose an attach function that will patch String with new methods.

  }, {
    key: 'attach',
    value: function attach() {
      var self = this;

      String.prototype.tokenize = function () {
        return self.tokenize(this);
      };
    }
  }, {
    key: 'tokenize',
    value: function tokenize() {}
  }]);

  return Tokenizer;
}();

exports.default = Tokenizer;