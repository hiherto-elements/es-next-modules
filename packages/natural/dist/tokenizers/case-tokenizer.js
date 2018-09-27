'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaseTokenizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tokenizer = require('./tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaseTokenizer = exports.CaseTokenizer = function (_Tokenizer) {
  _inherits(CaseTokenizer, _Tokenizer);

  function CaseTokenizer() {
    _classCallCheck(this, CaseTokenizer);

    return _possibleConstructorReturn(this, (CaseTokenizer.__proto__ || Object.getPrototypeOf(CaseTokenizer)).call(this));
  }

  _createClass(CaseTokenizer, [{
    key: 'attach',
    value: function attach() {
      var self = this;

      String.prototype.tokenize = function (preserveApostrophe) {
        return self.tokenize(this, preserveApostrophe);
      };
    }

    // Idea from Seagull: http://stackoverflow.com/a/26482650

  }, {
    key: 'tokenize',
    value: function tokenize(text, preserveApostrophe) {
      var whitelist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var lower = text.toLowerCase();
      var upper = text.toUpperCase();
      var result = '';
      var i = void 0;

      for (i = 0; i < lower.length; ++i) {
        if (lower[i] !== upper[i] || whitelist.includes(lower[i]) || text[i] === '\'' && preserveApostrophe) {
          result += text[i];
        } else {
          result += ' ';
        }
      }

      return this.trim(result.replace(/\s+/g, ' ').split(' '));
    }
  }]);

  return CaseTokenizer;
}(_tokenizer2.default);

exports.default = CaseTokenizer;